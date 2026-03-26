const CTASection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-4">
          Next step
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6">
          Book a 30-min strategy call.
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground mb-4 max-w-xl mx-auto leading-relaxed">
          Tell us what you're working on and where you're stuck. 
          No pitch, no proposal — just a honest conversation about your options.
        </p>
        <p className="font-body text-sm text-muted-foreground/60 mb-10 italic">
          Best suited for founders already building or with a product in market.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
        >
          Book a Strategy Call
        </a>
      </div>
    </section>
  );
};

export default CTASection;
