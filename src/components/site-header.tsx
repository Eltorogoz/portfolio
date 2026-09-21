"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";

import avatar from "@/assets/kristopher-valladares-avatar.jpg";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { profile, sections } from "@/content/profile";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-3.5">
        <a href="#top" className="group flex items-center gap-2.5">
          <Image
            src={avatar}
            alt=""
            placeholder="blur"
            sizes="32px"
            className="size-7 rounded-full border border-border/70 object-cover"
          />
          <span className="text-sm font-medium tracking-tight sm:inline">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
            render={
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              />
            }
          >
            <GithubIcon className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden text-muted-foreground hover:text-foreground sm:inline-flex"
            render={
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              />
            }
          >
            <LinkedinIcon className="size-4" />
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border/60 px-5 py-2 md:hidden">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {section.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
