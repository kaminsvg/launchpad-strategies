const AboutSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-primary">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-4">
            About
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-primary-foreground mb-6">
            Strategy grounded in{" "}
            <span className="italic">real execution.</span>
          </h2>
          <p className="font-body text-base text-primary-foreground/80 leading-relaxed mb-6">
            With experience spanning Mastercard, Lyft, Google, Zoox (Amazon), 
            Bain & Company, and Verkada, I bring a rare blend of strategic rigor and 
            operational depth. I've helped teams navigate the hardest problems — from 
            -1 to launch and beyond.
          </p>
          <p className="font-body text-base text-primary-foreground/80 leading-relaxed">
            Whether you're a founder defining your pricing model, a growth-stage 
            company optimizing unit economics, or a corporation rethinking your 
            go-to-market — I bring clarity, speed, and conviction.
          </p>
        </div>
        <div className="space-y-6">
          {[
            { metric: "6+", label: "Companies scaled from concept to market" },
            { metric: "10+", label: "Years in tech strategy & operations" },
            { metric: "$B+", label: "Revenue impacted across engagements" },
          ].map((item) => (
            <div key={item.label} className="border-l-2 border-accent pl-6 py-2">
              <p className="font-display text-2xl md:text-3xl font-medium text-primary-foreground">
                {item.metric}
              </p>
              <p className="font-body text-sm text-primary-foreground/60">
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
