import { Download, Code2, Rocket, Wrench } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const services = [
    {
      icon: Code2,
      title: "Développement sur-mesure",
      description: "De l'architecture back-end à l'interface front-end.",
    },
    {
      icon: Rocket,
      title: "Développement de projets web",
      description: "De la conception à la mise en production.",
    },
    {
      icon: Wrench,
      title: "Qualité et Maintenance",
      description:
        "Même après la livraison, nous restons en contact afin de maintenir le projet à jour.",
    },
  ];

  return (
    <div className="container-page pt-24">
      {/* Hero Section */}
      <section className="mb-20 animate-fade-in flex flex-align-center">
        <div>
          <p className="text-subtle mb-4">Bienvenue sur le site web de</p>
          <h1 className="heading-display text-foreground mb-6">Donovan Goudal</h1>
          <p className="text-body text-muted-foreground max-w-2xl mb-8">
            Je conçois des applications web modernes et performantes en combinant la
            flexibilité de <span className="text-primary font-medium">React</span> et la puissance de{" "}
            <span className="text-primary font-medium">C#.NET</span>.
          </p>
          <p className="text-body text-foreground max-w-2xl mb-10">
            Mon objectif : transformer des architectures complexes en expériences
            utilisateurs fluides et intuitives.
          </p>

          <a
            href="/assets/cv.pdf"
            download
            className="btn-outline inline-flex items-center gap-2"
            >
            <Download className="w-4 h-4" />
            Télécharger mon CV (PDF)
          </a>
        </div>
        <div className="hero-img">
          <img src="/assets/images/donovangoudal.jpg"/>
        </div>
      </section>

      <div className="separator-warm" />

      {/* Services Section */}
      <section className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="heading-section text-foreground mb-2">En quoi je peux vous aider</h2>
        <p className="text-subtle mb-10">
          Des solutions adaptées à vos besoins
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
