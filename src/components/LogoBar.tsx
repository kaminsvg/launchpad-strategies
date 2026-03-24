const companies = [
  {
    name: "Bain & Company",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Bain_and_Company_Logo_1.svg/1280px-Bain_and_Company_Logo_1.svg.png",
    url: "https://www.bain.com",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    url: "https://www.google.com",
  },
  {
    name: "Lyft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/1200px-Lyft_logo.svg.png",
    url: "https://www.lyft.com",
  },
  {
    name: "Mastercard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png",
    url: "https://www.mastercard.com",
  },
  {
    name: "Verkada",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Verkada_Logo.svg/1200px-Verkada_Logo.svg.png",
    url: "https://www.verkada.com",
  },
  {
    name: "Zoox (Amazon)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Zoox_logo.svg/1200px-Zoox_logo.svg.png",
    url: "https://zoox.com",
  },
];

const LogoBar = () => {
  return (
    <section className="border-y border-border py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-8 text-center">
          Experience across industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              title={company.name}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
