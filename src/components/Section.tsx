interface SectionProps {
    title: string;
    description: string;
  }

export default function Section({ title, description }: SectionProps) {
    return (
        <section className="space-y-5 lg:space-y-5">
          <h2 className="font-bold lg:text-3xl">{title}</h2>
          <p className="tracking-tighter">{description}</p>
        </section>
    );
    }