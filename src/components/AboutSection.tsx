import { Linkedin } from "lucide-react";

const cofounders = [
  {
    name: "Karan Amin",
    title: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/karanamin",
    expertise: [
      "Corporate Development",
      "Finance Strategy",
      "Cost Optimization",
      "Supply Chain Management",
    ],
    companies: ["Bain & Company", "Verkada", "Zoox (Amazon)"],
    bio: "Karan brings deep expertise in corporate development and finance strategy, with experience at Bain & Company, Verkada, and Zoox (Amazon). He specializes in helping companies optimize cost structures, navigate M&A, and build scalable financial operations from the ground up.",
  },
  {
    name: "Manuj Arora",
    title: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/manujarora",
    expertise: [
      "People Strategy & Analytics",
      "Management Consulting",
      "Financial Planning",
      "Operations Research",
    ],
    companies: ["Verkada", "Bain & Company", "L.E.K. Consulting", "Oak Hill Advisors"],
    education: "MBA, UCLA Anderson · MS Operations Research, Columbia University",
    bio: "Manuj is a versatile strategist with experience spanning management consulting, finance, and people strategy. From Bain & Company to Verkada, he drives profitable growth by tackling the most pressing business questions with analytical rigor — backed by an MBA from UCLA Anderson and an MS in Operations Research from Columbia.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-primary">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-4 text-center">
          About Us
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-primary-foreground mb-4 text-center">
          Strategy grounded in{" "}
          <span className="italic">real execution.</span>
        </h2>
        <p className="font-body text-base text-primary-foreground/70 leading-relaxed mb-16 text-center max-w-2xl mx-auto">
          Together, we bring a rare blend of strategic rigor and operational
          depth across pricing, corporate development, finance, and
          go-to-market — from -1 to launch and beyond.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cofounders.map((person) => (
            <div
              key={person.name}
              className="border border-primary-foreground/10 rounded-2xl p-8 bg-primary-foreground/5 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-medium text-primary-foreground">
                    {person.name}
                  </h3>
                  <p className="font-body text-sm text-accent mt-1">
                    {person.title}
                  </p>
                </div>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/40 hover:text-accent transition-colors"
                  title={`${person.name} on LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed mb-6">
                {person.bio}
              </p>

              <div className="mb-6">
                <p className="font-body text-xs tracking-[0.15em] uppercase text-primary-foreground/40 mb-3">
                  Companies
                </p>
                <div className="flex flex-wrap gap-2">
                  {person.companies.map((company) => (
                    <span
                      key={company}
                      className="font-body text-xs px-3 py-1 rounded-full border border-accent/30 text-accent/80"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-primary-foreground/40 mb-3">
                  Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {person.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="font-body text-xs px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shared metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-primary-foreground/10">
          {[
            { metric: "6+", label: "Companies scaled from concept to market" },
            { metric: "10+", label: "Years combined in tech strategy & ops" },
            { metric: "$B+", label: "Revenue impacted across engagements" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-medium text-accent">
                {item.metric}
              </p>
              <p className="font-body text-sm text-primary-foreground/50 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
