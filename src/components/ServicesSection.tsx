import { AlertTriangle, Layers, Code2, Users, Eye } from "lucide-react";

const situations = [
  {
    icon: AlertTriangle,
    title: "MVP breaking at scale",
    description: "You built fast to prove the concept. Now traffic is growing and things are falling apart. We help you figure out what to fix first — without a full rewrite.",
  },
  {
    icon: Layers,
    title: "Overbuilding too early",
    description: "Your team is building infrastructure for problems you don't have yet. We help you strip back to what actually matters right now.",
  },
  {
    icon: Code2,
    title: "Unclear tech stack decisions",
    description: "You're getting conflicting advice on frameworks, platforms, and vendors. We cut through the noise with a clear-eyed recommendation.",
  },
  {
    icon: Users,
    title: "Inefficient use of engineering resources",
    description: "Dev costs are climbing but velocity isn't. We audit how your team spends its time and where the leaks are.",
  },
  {
    icon: Eye,
    title: "Need a second opinion before committing",
    description: "You're about to make a big bet — new platform, major hire, vendor contract. We give you an honest read before you sign.",
  },
];

const ServicesSection = () => {
  return (
    <section id="situations" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-4">
          Where we come in
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
          Where we usually get called in
        </h2>
        <p className="font-body text-base text-muted-foreground mb-16 max-w-2xl leading-relaxed">
          Most founders reach out when something feels off — a decision that's too big to get wrong, or a problem that's too expensive to ignore.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {situations.map((situation) => (
            <div
              key={situation.title}
              className="group p-6 rounded-sm border border-border hover:border-accent/50 hover:bg-card transition-all duration-300"
            >
              <situation.icon className="w-5 h-5 text-accent mb-4" />
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                {situation.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {situation.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
