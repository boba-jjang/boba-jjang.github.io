import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Education = (typeof RESUME_DATA)["education"][number];

interface EducationPeriodProps {
  start: Education["start"];
  end: Education["end"];
}

/**
 * Displays the education period in a consistent format
 */
function EducationPeriod({ start, end }: EducationPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      title={`Period: ${start} to ${end}`}
    >
      {start} - {end}
    </div>
  );
}

interface SchoolLinkProps {
  school: Education["school"];
  url?: (Education & { url?: string })["url"];
}

/**
 * Renders school name with optional link
 */
function SchoolLink({ school, url }: SchoolLinkProps) {
  if (!url) {
    return <span className="font-semibold leading-none">{school}</span>;
  }

  return (
    <a
      className="font-semibold text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${school} website`}
    >
      {school}
    </a>
  );
}

interface EducationItemProps {
  education: Education;
}

/**
 * Individual education card component
 */
function EducationItem({ education }: EducationItemProps) {
  const { school, start, end, degree } = education;
  const url = (education as Education & { url?: string }).url;

  const id = `education-${school.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center gap-x-1 leading-none" id={id}>
            <SchoolLink school={school} url={url} />
          </h3>
          <EducationPeriod start={start} end={end} />
        </div>
      </CardHeader>

      <CardContent className="mt-2 text-foreground/80 print:text-[12px]" aria-labelledby={id}>
        {degree}
      </CardContent>
    </Card>
  );
}

interface EducationListProps {
  education: readonly Education[];
}

/**
 * Main education section component
 * Renders a list of education experiences
 */
export function Education({ education }: EducationListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="education-section">
        Education
      </h2>
      <div className="space-y-4" role="feed" aria-labelledby="education-section">
        {education.map((item) => (
          <article key={`${item.school}-${item.start}`}>
            <EducationItem education={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
