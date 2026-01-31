import React from "react";
import { Section } from "@/components/ui/section";

export function Background() {
  return (
    <Section className="scroll-mb-16 print:space-y-4">
      <h2 className="text-xl font-bold" id="background">
        Background
      </h2>

      <div className="space-y-3 text-sm leading-relaxed text-foreground/90">
        <p>
          I began my academic training in Computer Engineering at the University
          of South Florida, where I completed my undergraduate and master’s
          degrees under the guidance of Dr. Swaroop Ghosh.
        </p>

        <p>
          I initially continued on to pursue a Ph.D., but after stepping away to
          gain industry experience, I realized that the time away clarified—
          rather than diminished—my commitment to research.
        </p>

        <p>
          In 2018, I returned to academia and joined the Systems Software Research
          Group (SSRG) at Virginia Tech under the mentorship of Dr. Binoy
          Ravindran. His guidance shaped both my research direction and my
          approach to systems thinking and long-term problem solving.
        </p>

        <p>
          I completed my Ph.D. in Computer Engineering at Virginia Tech in 2024.
          The experience reinforced a belief I strongly carry: trying again,
          when done deliberately, is a strength—not a setback.
        </p>
      </div>
    </Section>
  );
}