import { Linkedin } from "lucide-react";
import bainLogo from "@/assets/bain-logo.svg";

const companyLogos: Record<string, string> = {
  "Zoox": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Zoox_logo.svg/1200px-Zoox_logo.svg.png",
  "Google": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "Lyft": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/1200px-Lyft_logo.svg.png",
  "Mastercard": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png",
  "Verkada": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Verkada_Logo.svg/1200px-Verkada_Logo.svg.png",
  "Bain & Company": bainLogo,
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
      "Supply Chain & Operations",
      "Cost Optimization",
      "Vendor Strategy",
    ],
    companies: ["Zoox", "Google", "Lyft", "Mastercard"],
    bio: "Karan has spent 15+ years in scaling products and business, operational efficinecny, and supply chain strategy. Companies he has worked in include Zoox, Google, Lyft, and Mastercard. He's driven $100+ in cost reductions and built operational functions from scratch. He knows where startups waste money — and how to stop it.",
  },
  {
    name: "Manuj Arora",
    title: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/manujarora",
    expertise: [
      "Strategy & Analytics",
      "Management Consulting",
      "Financial Planning",
      "Operations Strategy",
    ],
    companies: ["Verkada", "Bain & Company", "L.E.K. Consulting", "Oak Hill Advisors"],
    bio: "Manuj has worked across Bain & Company, L.E.K., and Verkada — tackling growth strategy, org design, and operational efficiency. He brings analytical rigor from an MBA at UCLA Anderson and an MS in Operations Research from Columbia. He thinks in frameworks and speaks in plain English.",
  },
];

const thinkingPoints = [
  "Ship the smallest thing that proves you're right. Everything else is a distraction.",
  "Architecture should serve your next 6 months, not your 5-year fantasy.",
  "The best engineering teams are small, focused, and unblocked.",
  "If your vendor bill keeps climbing but revenue isn’t keeping up, it’s time to look under the hood.",
];

const AboutSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-primary">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-4 text-center">
          Who we are
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-primary-foreground mb-4 text-center">
          Two operators, not a firm.
        </h2>
        <p className="font-body text-base text-primary-foreground/70 leading-relaxed mb-16 text-center max-w-2xl mx-auto">
          We're not a consultancy or an agency. We're two people who've spent years inside 
          high-growth companies making the same decisions you're facing now. We stay focused on the decisions that matter.
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

        {/* How we think */}
        <div className="mt-20 pt-16 border-t border-primary-foreground/10">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-4 text-center">
            How we think
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-medium text-primary-foreground mb-10 text-center">
            A few things we believe.
          </h3>
          <div className="max-w-2xl mx-auto space-y-6">
            {thinkingPoints.map((point, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="font-display text-accent text-lg font-medium mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
