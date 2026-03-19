import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="container-page pt-24">
      <section className="mb-16 animate-fade-in">
        <h1 className="heading-display text-foreground mb-4">Contact</h1>
        <p className="text-body text-muted-foreground max-w-2xl">
          N'hésitez pas à me contacter. 
          <br />
          Réponse sous 24 heures par mail.
        </p>
      </section>

      <div className="card-warm max-w-md animate-slide-up space-y-6">
        <div className="flex items-center gap-4">
          <Mail className="w-6 h-6 text-primary shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground">Email</p>
            <a
              href="mailto:goudal.donovan@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors break-all"
            >
              goudal.donovan@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="w-6 h-6 text-primary shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">Téléphone</p>
            <a
              href="tel:+33769182218"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              07 69 18 22 18
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="w-6 h-6 text-primary shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">Localisation</p>
            <p className="text-muted-foreground">Valenciennes, Nord</p>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-subtle">
            Disponible pour des missions freelance et des collaborations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;