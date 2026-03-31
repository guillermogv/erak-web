import { Link } from "react-router-dom";
import { navigation, socialLinks, companyInfo } from "@/data/site-content";
import SocialIcons from "@/components/common/SocialIcons";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <a href={companyInfo.brochureUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Brochure
          </a>
          <a href={companyInfo.portfolioUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Portafolio
          </a>
        </div>
        <div className="mt-4 flex justify-center">
          <SocialIcons links={socialLinks} />
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Copyright © {new Date().getFullYear()} Todos los derechos reservados | Erak Consultores
        </p>
      </div>
    </footer>
  );
};

export default Footer;
