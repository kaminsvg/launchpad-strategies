const frameworks = [
  {
    number: "01",
    title: "Decisions, not deliverables",
    description:
      "Every engagement starts with the highest-leverage decision you're facing. I don't produce slide decks — I produce clarity on what to do next and why.",
  },
  {
    number: "02",
    title: "Reversibility over perfection",
    description:
      "The best technical strategy maximizes optionality. I help you identify which decisions are one-way doors and which ones you can safely iterate on.",
  },
  {
    number: "03",
    title: "Constraint-driven architecture",
    description:
      "Your stack should reflect your stage, not your ambition. I design for the team you have today while keeping the door open for the team you'll build tomorrow.",
  },
  {
    number: "04",
    title: "Speed as a feature",
    description:
      "Startups die from indecision more than from bad decisions. I compress weeks of internal debate into focused sessions with clear outcomes.",
  },
];

const HowIThink = () => {
  return (
    <section id="how-i-think" className="py-24 px-6 md:px-12 lg:px-24 bg-primary">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-4">
          How I think
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-primary-foreground mb-4">
          Frameworks, not formulas.
        </h2>
        <p className="font-body text-base text-primary-foreground/70 leading-relaxed mb-16 max-w-2xl">
          I don't follow playbooks. I bring structured thinking to messy problems — 
          the kind that don't have a "best practice" blog post.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {frameworks.map((fw) => (
            <div
              key={fw.number}
              className="border border-primary-foreground/10 rounded-sm p-8 bg-primary-foreground/5 backdrop-blur-sm"
            >
              <span className="font-body text-xs tracking-widest text-accent mb-4 block">
                {fw.number}
              </span>
              <h3 className="font-display text-xl font-medium text-primary-foreground mb-3">
                {fw.title}
              </h3>
              <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
                {fw.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIThink;
