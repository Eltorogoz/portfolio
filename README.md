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

## Deploying to Vercel

There is no database and no required environment variable, so the import needs no configuration.

1. Create an empty repository on GitHub — `Eltorogoz/portfolio` — with no README, licence or
   `.gitignore`.
2. Push this directory to it. If this folder is the repository root, `git push` is all that is
   needed. If it sits inside a larger repository, either split it out or set **Root Directory** to
   `portfolio` in step 4.
3. At [vercel.com/new](https://vercel.com/new), choose **Import Git Repository** and pick the repo.
4. Leave every build setting alone. Vercel detects Next.js, runs `npm install` and `next build`, and
   picks the right Node version from the lockfile. Set **Root Directory** here if the app is not at
   the repository root.
5. Click **Deploy**. The first build takes a couple of minutes and ends on a
   `your-project.vercel.app` URL. Every later push to `main` redeploys automatically.

### Optional: raise the GitHub rate limit

The repository section works anonymously. GitHub allows 60 unauthenticated requests an hour per IP,
and the response is cached for an hour, so this is rarely a problem. If the section ever shows its
error state, add a read-only token in **Project Settings → Environment Variables** as `GITHUB_TOKEN`
and redeploy. A classic token with no scopes selected is enough for public repository data.

### Rendering model

`next.config.ts` enables `cacheComponents`, so the page is partially prerendered: everything except
the GitHub section is static HTML served from the CDN, and that one section streams in per request.
It is done this way because prerendering the GitHub call at build time would bake a rate-limit error
into the page until the next revalidation. `next build` reports the route as `◐ Partial Prerender`.

### Any other Node host

```bash
npm run build
npm run start
```
