import { Suspense } from "react";

import { Background } from "@/components/background";
import { FeaturedProjects } from "@/components/featured-projects";
import { GithubRepos, GithubReposSkeleton } from "@/components/github-repos";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillsGrid } from "@/components/skills-grid";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FeaturedProjects />
        <SkillsGrid />
        <Background />
        <Suspense fallback={<GithubReposSkeleton />}>
          <GithubRepos />
        </Suspense>
        <SiteFooter />
      </main>
    </>
  );
}
