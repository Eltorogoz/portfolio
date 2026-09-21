import { ArrowUpRight } from "lucide-react";

import { GithubIcon } from "@/components/icons";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredProjects, type Project } from "@/content/profile";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border/70 bg-card">
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${project.accent}`}
      />

      <div className="relative p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {project.period}
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-muted-foreground">{project.subtitle}</p>

        <p className="mt-5 leading-relaxed text-pretty">{project.summary}</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              The problem
            </h4>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground text-pretty">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              What I built
            </h4>
            <ul className="mt-2.5 space-y-2">
              {project.build.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40"
                  />
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <dl className="mt-7 grid gap-px overflow-hidden rounded-lg border border-border/70 bg-border/70 sm:grid-cols-3">
          {project.outcomes.map((outcome) => (
            <div key={outcome.label} className="bg-card px-4 py-3.5">
              <dt className="text-xs text-muted-foreground">{outcome.label}</dt>
              <dd className="mt-1 font-mono text-lg font-medium tracking-tight">
                {outcome.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-7">
          <Button
            variant="outline"
            render={<a href={project.repo} target="_blank" rel="noreferrer" />}
          >
            <GithubIcon className="size-4" />
            View the code
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </div>
    </article>
  );
}

export function FeaturedProjects() {
  return (
    <section
      id="work"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-5 py-20"
    >
      <SectionHeading
        eyebrow="Selected work"
        title="Three projects that show the range"
        description="A live data pipeline, a database architecture problem, and an analysis that had to be honest about its own limits. Each one links to the full source."
      />

      <div className="mt-10 space-y-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
