import { Download, Code2, Rocket, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
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
      title: "Développement d'applications",
      description: "De la conception à la mise en production.",
    },
    {
      icon: Wrench,
      title: "Qualité et Maintenance",
      description:
        "Même après la livraison, nous restons en contact afin de maintenir le projet à jour.",
    },
  ];
  
  const descriptionText = "text-left text-body text-muted-foreground max-w-2xl mb-8";

  return (
    <div className="container-page pt-24">
      {/* Hero Section */}
      <section className="mb-20 animate-fade-in flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="text-subtle mb-4">Bienvenue sur le site de</p>
          <h1 className="text-5xl mb-2">Donovan Goudal</h1>
          <p
            className="text-2xl mb-6 text-primary"
          >
            Développeur .NET
          </p>
          <p className={descriptionText}>Vous avez un bug qui persiste, et l'IA ne parvient pas à la résoudre ?</p>
          <p className={descriptionText}>Vous aimeriez continuer cette application, mais vous avez l'impression de faire face à un mur au fur et à mesure que votre projet grandit ?</p>
          <p className={descriptionText}>Je peux vous aider à y mettre de l'ordre.</p>
          
          <p className="link-warm mb-8 text-xl">
            <Link to="/contact" className={"underline"}>Contactez-moi</Link>
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
        <div className="shrink-0 w-64 lg:w-72 mx-auto md:mx-0">
          <img src="/assets/images/donovangoudal.jpg" alt="Ma photo" className="w-full h-auto rounded-md border-2 border-border" />
        </div>
      </section>

      <div className="separator-warm" />

      {/* Services Section */}
      <section className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="heading-section text-foreground mb-2">
          En quoi je peux vous aider
        </h2>
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
