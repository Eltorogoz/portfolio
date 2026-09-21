import {
  featuredProjects,
  hiddenRepos,
  profile,
  repoNotes,
} from "@/content/profile";

export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  url: string;
  updatedAt: string;
};

/** Repositories already covered elsewhere on the page, plus empty scaffolds. */
const HIDDEN = new Set([
  profile.githubUser, // the profile README repo
  ...featuredProjects.map((project) => project.repo.split("/").pop() ?? ""),
  "livinglabs", // shown under earlier projects
  ...hiddenRepos,
]);

/**
 * Reads the public repository list from GitHub.
 *
 * Runs server-side and caches for an hour so visitor traffic cannot exhaust
 * GitHub's anonymous rate limit. A GITHUB_TOKEN raises that limit if one is
 * configured, but the site works without any credentials. Throws on failure so
 * the caller can render an error state.
 */
export async function fetchRepos(): Promise<Repo[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "kristopher-valladares-portfolio",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(
    `https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`,
    { headers, next: { revalidate: 3600 } },
  );

  if (!response.ok) {
    throw new Error(`GitHub responded with ${response.status}`);
  }

  const raw: unknown = await response.json();
  if (!Array.isArray(raw)) {
    throw new Error("GitHub returned an unexpected response");
  }

  return raw
    .filter(
      (repo): repo is Record<string, unknown> =>
        typeof repo === "object" && repo !== null,
    )
    .filter((repo) => !repo.fork && !HIDDEN.has(String(repo.name)))
    .map((repo) => ({
      name: String(repo.name),
      // The curated note wins: most descriptions here are empty or a single
      // word left over from `git init`.
      description:
        repoNotes[String(repo.name)] ??
        (repo.description ? String(repo.description) : null),
      language: repo.language ? String(repo.language) : null,
      url: String(repo.html_url),
      updatedAt: String(repo.pushed_at ?? repo.updated_at),
    }))
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}
