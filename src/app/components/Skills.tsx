import React from "react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { SkillGroup } from "@/lib/types";

interface SkillsProps {
  skills: SkillGroup[];
  className?: string;
}

/**
 * Skills section component
 * Renders skills grouped by category (e.g., Languages | Tools)
 */
export function Skills({ skills, className }: SkillsProps) {
  if (!skills?.length) return null;

  return (
    <Section className={cn(className)}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>

      <div className="mt-3 space-y-2" aria-labelledby="skills-section">
        {skills.map((group) => {
          return (
            <div
              key={group.category}
              className="grid grid-cols-[140px_1fr] gap-x-4 items-start"
            >
              {/* Category */}
              <div
                className={cn(
                  "rounded-md border border-border bg-muted px-3 py-2 text-sm font-semibold text-muted-foreground"
                )}
              >
                {group.category}
              </div>

              {/* Items */}
              <div
                className={cn(
                  "rounded-md border border-border bg-card px-3 py-2 font-mono text-xs leading-relaxed text-muted-foreground print:text-[10px]"
                )}
              >
                {group.items.join(", ")}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
