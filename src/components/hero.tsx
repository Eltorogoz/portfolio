import { ArrowDown, FileText, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      {/* Soft background wash, purely decorative. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-muted)_0%,transparent_75%)]"
      />

      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:py-28">
        <p className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-muted/40 px-3 py-1 font-mono text-xs text-muted-foreground">
          <MapPin className="size-3" />
          {profile.location}
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
          {profile.role}
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">
          {profile.tagline}
        </p>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          {profile.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button size="lg" render={<a href="#work" />}>
            See the work
            <ArrowDown className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            render={<a href={`mailto:${profile.email}`} />}
          >
            <Mail className="size-4" />
            Get in touch
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
            Résumé
          </Button>
        </div>
      </div>
    </section>
  );
}
