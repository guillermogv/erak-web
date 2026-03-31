import { Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import type { SocialLink } from "@/data/site-content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
};

interface SocialIconsProps {
  links: SocialLink[];
  className?: string;
}

const SocialIcons = ({ links, className = "" }: SocialIconsProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {Icon && <Icon className="h-5 w-5" />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
