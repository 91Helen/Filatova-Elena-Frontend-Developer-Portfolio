import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import "animate.css";
import { useOnScreen } from "@/shared/hooks/useOnScreen";
import contactImg from "@/shared/assets/img/BlackyContact-removebg-preview.png";
import "./Contact.css";

export const Contact = () => {
  const { t, i18n } = useTranslation();
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    clearErrors,
    formState: { errors, isSubmitting } 
  } = useForm({
    mode: "onChange"
  });
  
  useEffect(() => {
    clearErrors();
  }, [i18n.language, clearErrors]);

  const [imgRef, imgVisible] = useOnScreen();
  const [formRef, formVisible] = useOnScreen();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/xblobapj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Swal.fire({ 
          icon: "success", 
          title: t("contact.successTitle"), 
          text: t("contact.successText") 
        });
        reset();
      } else {
        throw new Error();
      }
    } catch {
      Swal.fire({ 
        icon: "error", 
        title: t("contact.errorTitle"), 
        text: t("contact.errorText") 
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img 
              ref={imgRef} 
              className={imgVisible ? "animate__animated animate__zoomIn" : ""} 
              src={contactImg} 
              alt="Contact" 
            />
          </Col>
          <Col md={6}>
            <div ref={formRef} className={formVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>{t("contact.title")}</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input {...register("firstName", { required: true })} placeholder={t("contact.firstName")} />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input {...register("lastName", { required: true })} placeholder={t("contact.lastName")} />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input 
                      {...register("email", { 
                        validate: (v) => v === "" || /^\S+@\S+$/i.test(v) 
                      })} 
                      placeholder={t("contact.email")}
                      className={errors.email ? "error-input" : ""}
                    />
                    {errors.email && <small className="error-message">{t("contact.emailError")}</small>}
                  </Col>
                  <Col sm={6} className="px-1">
                    <input 
                      {...register("phone", { 
                        validate: (v) => !v || /^[0-9]+$/i.test(v) 
                      })} 
                      placeholder={t("contact.phone")}
                      className={errors.phone ? "error-input" : ""}
                    />
                    {errors.phone && <small className="error-message">{t("contact.phoneError")}</small>}
                  </Col>
                  <Col className="px-1">
                    <textarea {...register("message", { required: true })} rows="6" placeholder={t("contact.message")} />
                    <button type="submit" disabled={isSubmitting}>
                      <span>{isSubmitting ? t("contact.sending") : t("contact.send")}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};