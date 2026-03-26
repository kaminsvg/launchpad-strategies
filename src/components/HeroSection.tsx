const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-6 animate-fade-in">
          Strategic Technology Advisory
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-8 animate-fade-up">
          We help founders make{" "}
          <span className="italic text-primary">better tech decisions.</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Your MVP is cracking under load. Your dev spend is climbing but output isn't. 
          Your architecture choices are keeping you up at night. We've been in those rooms, 
          and we help founders cut through the noise before it gets expensive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
          >
            Book a Strategy Call
          </a>
          <a
            href="#situations"
            className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-body font-medium text-sm tracking-wide rounded-sm hover:bg-secondary transition-colors"
          >
            Where We Help
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
