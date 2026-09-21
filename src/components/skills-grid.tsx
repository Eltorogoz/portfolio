import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/content/profile";

export function SkillsGrid() {
  return (
    <section id="skills" className="border-y border-border/60 bg-muted/20">
      <div className="mx-auto w-full max-w-5xl scroll-mt-20 px-5 py-20">
        <SectionHeading
          eyebrow="Toolkit"
          title="What I work with"
          description="Grouped by what I actually use them for rather than by how long the list can be made."
        />

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="text-sm font-medium">{group.group}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="bg-background/60 font-normal"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
