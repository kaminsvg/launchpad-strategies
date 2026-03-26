import { Rocket, TrendingUp, Building } from "lucide-react";

const profiles = [
  {
    icon: Rocket,
    stage: "Pre-seed to Seed",
    title: "First-time founders",
    points: [
      "Choosing the right stack before writing a line of code",
      "Avoiding the 'rebuild everything at Series A' trap",
      "Separating MVP shortcuts from technical debt time bombs",
    ],
  },
  {
    icon: TrendingUp,
    stage: "Series A to B",
    title: "Growth-stage teams",
    points: [
      "Scaling architecture without over-engineering",
      "Build vs. buy decisions that actually stick",
      "Hiring your first senior technical leaders",
    ],
  },
  {
    icon: Building,
    stage: "Corporate & PE",
    title: "Non-technical executives",
    points: [
      "Tech due diligence for acquisitions",
      "Evaluating engineering team capabilities",
      "Understanding what your CTO isn't telling you",
    ],
  },
];

const WhoIWorkWith = () => {
  return (
    <section id="who" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-4">
          Who I work with
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
          Built for people who{" "}
          <span className="italic">ship, not spectate.</span>
        </h2>
        <p className="font-body text-base text-muted-foreground mb-16 max-w-2xl leading-relaxed">
          I'm not a dev shop. I'm the thinking partner you bring in before you commit 
          six figures to the wrong architecture — or the wrong hire.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <div
              key={profile.title}
              className="group p-8 rounded-sm border border-border hover:border-accent/50 hover:bg-card transition-all duration-300"
            >
              <profile.icon className="w-5 h-5 text-accent mb-4" />
              <p className="font-body text-xs tracking-[0.15em] uppercase text-accent mb-2">
                {profile.stage}
              </p>
              <h3 className="font-display text-xl font-medium text-foreground mb-4">
                {profile.title}
              </h3>
              <ul className="space-y-3">
                {profile.points.map((point) => (
                  <li
                    key={point}
                    className="font-body text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border group-hover:border-accent/30 transition-colors"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIWorkWith;
