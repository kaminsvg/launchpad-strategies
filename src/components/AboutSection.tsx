import { Linkedin } from "lucide-react";

const companyLogos: Record<string, string> = {
  "Zoox": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Zoox_logo.svg/1200px-Zoox_logo.svg.png",
  "Google": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "Lyft": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/1200px-Lyft_logo.svg.png",
  "Mastercard": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png",
  "Verkada": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Verkada_Logo.svg/1200px-Verkada_Logo.svg.png",
  "Bain & Company": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Bain_and_Company_Logo_1.svg/1280px-Bain_and_Company_Logo_1.svg.png",
  "L.E.K. Consulting": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/L.E.K._Consulting_logo.svg/1200px-L.E.K._Consulting_logo.svg.png",
  "Oak Hill Advisors": "",
};

const cofounders = [
  {
    name: "Karan Amin",
    title: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/karanamin",
    expertise: [
      "Strategic Sourcing",
      "Supply Chain Management",
      "Cost Optimization",
      "Vendor & Partner Strategy",
    ],
    companies: ["Zoox", "Google", "Lyft", "Mastercard"],
    bio: "Karan is a seasoned supply chain and sourcing strategist with leadership roles at Zoox, Google, Lyft, and Mastercard. He has driven $75M+ in cost reductions, negotiated 50+ partner agreements, and launched category-defining procurement strategies — from Zoox's first rideshare app to Google's Fitbit integration and Lyft's GTM acceleration. He holds an MBA from Rutgers Business School specializing in Supply Chain Management.",
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
                <div className="flex flex-wrap items-center gap-4">
                  {person.companies.map((company) => {
                    const logo = companyLogos[company];
                    return logo ? (
                      <img
                        key={company}
                        src={logo}
                        alt={company}
                        loading="lazy"
                        className="h-5 w-auto object-contain brightness-0 invert opacity-60"
                      />
                    ) : (
                      <span
                        key={company}
                        className="font-body text-xs px-3 py-1 rounded-full border border-accent/30 text-accent/80"
                      >
                        {company}
                      </span>
                    );
                  })}
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
