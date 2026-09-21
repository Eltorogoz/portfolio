import { ArrowUpRight, GraduationCap } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { education, experience, otherProjects } from "@/content/profile";

export function Background() {
  return (
    <section
      id="background"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-5 py-20"
    >
      <SectionHeading
        eyebrow="Background"
        title="Experience, education and earlier projects"
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-10">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Experience
            </h3>
            <div className="mt-4 space-y-6">
              {experience.map((job) => (
                <div key={job.org} className="border-l border-border pl-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="font-medium">{job.role}</h4>
                    <span className="font-mono text-xs text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {job.org} · {job.location}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden
                          className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40"
                        />
                        <span className="text-pretty">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Earlier projects
            </h3>
            <div className="mt-4 space-y-5">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="border-l border-border pl-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="font-medium">
                      {project.repo ? (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          {project.title}
                          <ArrowUpRight className="size-3.5 text-muted-foreground" />
                        </a>
                      ) : (
                        project.title
                      )}
                    </h4>
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {project.description}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-8 rounded-xl border border-border/70 bg-card p-6">
          <div>
            <div className="flex items-center gap-2">
              <GraduationCap className="size-4 text-muted-foreground" />
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Education
              </h3>
            </div>
            <p className="mt-3 font-medium">{education.degree}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {education.school} · {education.location}
            </p>
            <p className="mt-0.5 font-mono text-xs text-muted-foreground">
              Graduated {education.graduated}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Certifications
            </h3>
            <ul className="mt-3 space-y-2">
              {education.certifications.map((cert) => (
                <li
                  key={cert}
                  className="text-sm leading-relaxed text-muted-foreground text-pretty"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Languages
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {education.languages.map((language) => (
                <Badge key={language} variant="outline" className="font-normal">
                  {language}
                </Badge>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
