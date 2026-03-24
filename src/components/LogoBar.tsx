const logos = [
  "Mastercard",
  "Lyft",
  "Google",
  "Zoox (Amazon)",
  "Bain & Company",
  "Verkada",
];

const LogoBar = () => {
  return (
    <section className="border-y border-border py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-8 text-center">
          Experience across industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {logos.map((name) => (
            <span
              key={name}
              className="font-body text-sm md:text-base font-medium text-muted-foreground/70 tracking-wide"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
