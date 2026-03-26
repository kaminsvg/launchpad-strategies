const CTASection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-4">
          Let's work together
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground mb-6">
          Ready to move from idea to&nbsp;impact?
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Book a free 30-minute strategy session. Let's discuss where your 
          business is headed and how I can help you get there faster.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CTASection;
