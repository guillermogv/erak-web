import { contactInfo, courseSelectOptions, companyInfo } from "@/data/site-content";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = () => {
  return (
    <Section id="contacto" className="bg-muted">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Course inquiry */}
        <div>
          <h3 className="text-xl font-bold text-foreground">
            Solicita información
          </h3>
          <p className="font-bold text-foreground">sobre nuestros cursos</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Ponte en contacto con nosotros para brindarte
          </p>
          <p className="text-sm text-muted-foreground">
            información sobre los servicios de investigación, data research y cursos profesionales.
          </p>

          <div className="mt-6">
            <h4 className="mb-2 text-base font-semibold text-foreground">Disponibilidad de cursos</h4>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un curso" />
              </SelectTrigger>
              <SelectContent>
                {courseSelectOptions.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="mt-4 w-full" type="button">
              CONSULTAR
            </Button>
          </div>
        </div>

        {/* Contact details */}
        <div className="space-y-6">
          <div>
            <h4 className="mb-1 font-bold text-foreground">Dirección</h4>
            <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
          </div>
          <div>
            <h4 className="mb-1 font-bold text-foreground">Horarios de atención</h4>
            <p className="text-sm text-muted-foreground">{contactInfo.hours.weekdays}</p>
            <p className="text-sm text-muted-foreground">{contactInfo.hours.saturday}</p>
          </div>
          <div>
            <h4 className="mb-1 font-bold text-foreground">Teléfonos</h4>
            {contactInfo.phones.map((phone) => (
              <p key={phone} className="text-sm text-muted-foreground">{phone}</p>
            ))}
          </div>
          <div>
            <h4 className="mb-1 font-bold text-foreground">Correos</h4>
            {contactInfo.emails.map((email) => (
              <p key={email} className="text-sm text-muted-foreground">{email}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
