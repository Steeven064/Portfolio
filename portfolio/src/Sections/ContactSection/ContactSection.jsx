import "./contactSection.css";
import { FormField, Button, Form, FormTextArea } from "semantic-ui-react";
import { RiSendPlaneFill } from "react-icons/ri";
import { LottieForm } from "./LottieForm";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div
        className="contact-container"
        data-aos="fade-right"
        data-aos-offset="430"
      >
        <div className="contact-form">
          <h1>Formulario de Contacto</h1>
          <p>
            Háblame directamente a mi correo <b>steevengualan@gmail.com</b>
          </p>

          <Form>
            <FormField className="datos-form">
              <input placeholder="Tu Nombre" />
            </FormField>
            <FormField className="datos-form">
              <input placeholder="tu-correo@mail.com" />
            </FormField>
            <FormTextArea placeholder="Quiero hablar contigo" />
            <Button className="button-form" color="violet">
              <RiSendPlaneFill className="icon-form" />
              Enviar
            </Button>
          </Form>
        </div>

        <div className="image-form">
          <LottieForm />
        </div>
      </div>
    </section>
  );
}
