import { ArrowDown, FileText, Mail, MapPin } from "lucide-react";
import Image from "next/image";

import avatar from "@/assets/kristopher-valladares-avatar.jpg";
import portrait from "@/assets/kristopher-valladares.jpg";
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

      <div className="mx-auto grid w-full max-w-5xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-16">
        <div>
          {/* Small screens get the portrait as an avatar; the full frame below
              only appears once there is a second column to put it in. */}
          <Image
            src={avatar}
            alt={`${profile.name}, photographed in Kyoto`}
            placeholder="blur"
            priority
            sizes="96px"
            className="mb-7 size-24 rounded-full border border-border/70 object-cover lg:hidden"
          />

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

        <div className="hidden lg:block">
          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-muted/30 shadow-sm">
            <Image
              src={portrait}
              alt={`${profile.name}, photographed in Kyoto`}
              placeholder="blur"
              priority
              sizes="(min-width: 1024px) 22rem, 100vw"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
