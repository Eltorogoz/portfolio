import { AlertCircle, ArrowUpRight, FolderGit2 } from "lucide-react";

import { RepoRetryButton } from "@/components/repo-retry-button";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { fetchRepos, type Repo } from "@/lib/github";

function formatDate(iso: string) {
  const date = new Date(iso);
  return Number.isNaN(date.getTime())
    ? ""
    : date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <section id="repos" className="border-y border-border/60 bg-muted/20">
      <div className="mx-auto w-full max-w-5xl scroll-mt-20 px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Straight from GitHub"
            title="Everything else I have been building"
            description="A live pull of my public repositories, newest activity first. The featured projects are left out since they have their own section above, along with empty scaffolds and duplicates."
          />
          <Button
            variant="outline"
            render={
              <a href={profile.github} target="_blank" rel="noreferrer" />
            }
          >
            <FolderGit2 className="size-4" />@{profile.githubUser}
          </Button>
        </div>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col rounded-lg border border-border/70 bg-card p-5 transition-colors hover:border-foreground/30"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-mono text-sm font-medium break-all">{repo.name}</h3>
        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-pretty text-muted-foreground">
        {repo.description ?? "No description on the repository."}
      </p>
      <div className="mt-4 flex items-center justify-between gap-2">
        {repo.language ? (
          <Badge variant="secondary" className="font-normal">
            {repo.language}
          </Badge>
        ) : (
          <span />
        )}
        <span className="font-mono text-xs text-muted-foreground">
          {formatDate(repo.updatedAt)}
        </span>
      </div>
    </a>
  );
}

/** Shown while the GitHub request is in flight, via Suspense. */
export function GithubReposSkeleton() {
  return (
    <Shell>
      <div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-busy="true"
      >
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="rounded-lg border border-border/70 bg-card p-5"
          >
            <div className="h-4 w-32 animate-pulse rounded bg-muted" />
            <div className="mt-3 h-3 w-full animate-pulse rounded bg-muted" />
            <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-muted" />
            <div className="mt-4 h-5 w-20 animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
    </Shell>
  );
}

export async function GithubRepos() {
  let repos: Repo[];
  try {
    repos = await fetchRepos();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return (
      <Shell>
        <div className="flex flex-col items-start gap-4 rounded-lg border border-border/70 bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
            <div>
              <p className="font-medium">Could not load the repository list</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {message}. GitHub rate-limits anonymous requests, so this
                usually clears on its own.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 gap-2">
            <RepoRetryButton />
            <Button
              variant="ghost"
              render={
                <a href={profile.github} target="_blank" rel="noreferrer" />
              }
            >
              Open GitHub
            </Button>
          </div>
        </div>
      </Shell>
    );
  }

  if (repos.length === 0) {
    return (
      <Shell>
        <div className="rounded-lg border border-dashed border-border bg-card/50 p-10 text-center">
          <FolderGit2 className="mx-auto size-6 text-muted-foreground" />
          <p className="mt-3 font-medium">Nothing else to show yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Every public repository is already featured above.
          </p>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <RepoCard key={repo.name} repo={repo} />
        ))}
      </div>
    </Shell>
  );
}
