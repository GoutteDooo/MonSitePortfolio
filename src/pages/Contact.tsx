import { Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="container-page pt-24">
      <section className="mb-16 animate-fade-in">
        <h1 className="heading-display text-foreground mb-4">Contact</h1>
        <p className="text-body text-muted-foreground max-w-2xl">
          Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter. 
          Je vous répondrai dans les plus brefs délais.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        <aside className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="card-warm space-y-6">
            <h3 className="font-serif text-lg font-medium text-foreground">
              Informations de contact
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href="mailto:contact@donovangoudal.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@donovangoudal.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Localisation</p>
                  <p className="text-sm text-muted-foreground">France</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-subtle">
                Disponible pour des missions freelance et des collaborations.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
