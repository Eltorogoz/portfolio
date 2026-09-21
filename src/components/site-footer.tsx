import { FileText, Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/icons";

import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-5 py-20"
    >
      <div className="rounded-xl border border-border/70 bg-card p-8 sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Contact
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          Looking for analytics and full-stack work
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground text-pretty">
          If you have a dataset that needs modelling, a pipeline that needs
          building, or an interface that needs to make either of those
          understandable, I would like to hear about it.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" render={<a href={`mailto:${profile.email}`} />}>
            <Mail className="size-4" />
            {profile.email}
          </Button>
          <Button
            variant="outline"
            size="lg"
            render={
              <a href={profile.linkedin} target="_blank" rel="noreferrer" />
            }
          >
            <LinkedinIcon className="size-4" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            size="lg"
            render={
              <a href={profile.github} target="_blank" rel="noreferrer" />
            }
          >
            <GithubIcon className="size-4" />
            GitHub
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-muted-foreground hover:text-foreground"
            render={
              <a href={profile.resumePath} target="_blank" rel="noreferrer" />
            }
          >
            <FileText className="size-4" />
            Résumé (PDF)
          </Button>
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-xs text-muted-foreground">
        {profile.name} · {profile.location} · Built with Next.js and Tailwind
        CSS
      </p>
    </footer>
  );
}
