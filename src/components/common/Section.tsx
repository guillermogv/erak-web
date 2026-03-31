import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const Section = ({ id, children, className = "", containerClassName = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className={`container ${containerClassName}`}>{children}</div>
    </section>
  );
};

export default Section;
