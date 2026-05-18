import { FeatureCard } from "../FeatureCard";
import { SectionHeading } from "../SectionHeading";
import type { HighlightItem } from "../../data/mockData";

export interface HighlightsSectionProps {
  readonly data: Readonly<{
    eyebrow: string;
    title: string;
    items: readonly HighlightItem[];
  }>;
}

export function HighlightsSection({ data }: Readonly<HighlightsSectionProps>) {
  return (
    <section className="shell section" aria-labelledby="highlights-title">
      <SectionHeading eyebrow={data.eyebrow} title={data.title} />
      <div className="card-grid card-grid--four">
        {data.items.map((item) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            tag={item.tag}
            tagVariant={item.tagVariant}
          />
        ))}
      </div>
    </section>
  );
}
