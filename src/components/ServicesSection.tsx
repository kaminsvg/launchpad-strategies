import { TrendingUp, Target, DollarSign, BarChart3, Truck, Briefcase } from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Pricing Strategy",
    description: "Data-driven pricing models that maximize revenue and market positioning.",
  },
  {
    icon: TrendingUp,
    title: "Go-to-Market Strategy",
    description: "Launch plans that align product, distribution, and messaging for impact.",
  },
  {
    icon: BarChart3,
    title: "Cost Optimization",
    description: "Identify inefficiencies and build scalable cost structures.",
  },
  {
    icon: Briefcase,
    title: "Corporate Development",
    description: "M&A strategy, partnerships, and organizational structuring.",
  },
  {
    icon: Target,
    title: "Business Strategy",
    description: "End-to-end strategic planning from vision through execution.",
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description: "Optimize operations and logistics for reliability and scale.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-4">
          What I do
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-16">
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-sm border border-border hover:border-accent/50 hover:bg-card transition-all duration-300"
            >
              <service.icon className="w-5 h-5 text-accent mb-4" />
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
