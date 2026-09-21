# Kristopher Valladares — Portfolio

A personal portfolio site built with Next.js, TypeScript, Tailwind CSS and shadcn/ui. It features
three projects in depth, lists the rest of the public GitHub work by pulling it live from the GitHub
API, and links the résumé as a PDF.

## Run it locally

```bash
npm install
npm run dev
```

The dev script binds to port 3000 by default. To match the port used during development:

```bash
npx next dev -p 43127
```

Open http://localhost:43127.

## How the content is organised

Everything the site says about Kris lives in one file, [`src/content/profile.ts`](src/content/profile.ts):

| Export             | What it controls                                                       |
| ------------------ | ---------------------------------------------------------------------- |
| `profile`          | Name, role, contact links, résumé path, the intro paragraphs           |
| `featuredProjects` | The three in-depth project write-ups, including the metric strip       |
| `skills`           | The grouped toolkit badges                                             |
| `experience`       | The work history entries                                               |
| `otherProjects`    | Earlier projects shown in the background section                       |
| `education`        | Degree, certifications, languages                                      |
| `hiddenRepos`      | Repositories the live GitHub section skips                             |
| `repoNotes`        | Hand-written one-liners used when a repo has no useful description     |

To add a project, append to `featuredProjects` — the page picks it up with no other changes.

## The live GitHub section

`src/lib/github.ts` reads `api.github.com/users/Eltorogoz/repos` server-side and caches
the response for an hour, so visitor traffic cannot exhaust GitHub's anonymous rate limit. No
credentials are required. If a `GITHUB_TOKEN` environment variable is set, it is used to raise the
rate limit and never reaches the browser:

```bash
GITHUB_TOKEN=your_token npm run dev
```

The section renders as a server component behind Suspense and handles all three states: skeleton
cards while loading, a retry panel when
GitHub is unreachable or rate-limiting, and an empty state if every repository is filtered out.

## Replacing the résumé

Drop the new PDF at `public/files/Kristopher-Valladares-Resume.pdf`, or change `profile.resumePath`
to point somewhere else.

## Deploying

The site is a standard Next.js app with no database and no required environment variables, so
`vercel` or any Node host will run it as-is:

```bash
npm run build
npm run start
```
