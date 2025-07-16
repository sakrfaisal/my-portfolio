import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef(null);

  const handleSubmit = () => {
    emailjs
      .sendForm("service_cf4phtg", "template_pk7kzpx", form.current, "WzJ0J-WRPGZU0Y1IQ")
      .then(() => {
        alert("Message sent successfully");
      })
      .catch((err) => {
        alert("Message failed to send");
        console.log(err);
      });
  };

  return (
    <div className="bg-muted/30">
      <section data-aos="fade-up" id="contact" className="ontainer py-18 px-4 mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center text-gradient">
          {t("contact_heading")}
        </h2>
        <p className="text-center mb-14 text-muted-foreground">{t("contact_subheading")}</p>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1 w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-foreground">{t("contact_left_title")}</h3>
            <p className="mb-8 text-muted-foreground">{t("contact_left_body")}</p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="bg-accent p-3 rounded-lg">
                  <FaEnvelope className="text-primary text-lg" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">{t("contact_email_label")}</div>
                  <div className="text-muted-foreground">sakr1772007@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-accent p-3 rounded-lg">
                  <FaPhone className="text-primary text-lg" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">{t("contact_phone_label")}</div>
                  <div className="text-muted-foreground">+966 533 246 842</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-accent p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-primary text-lg" />
                </span>
                <div>
                  <div className="font-semibold text-foreground">{t("contact_location_label")}</div>
                  <div className="text-muted-foreground">{t("contact_location_value")}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 rounded-lg shadow-lg border border-border bg-background">
            <div className="flex flex-col space-y-1.5 p-6">
              <h4 className="text-xl font-bold text-foreground">{t("contact_form_title")}</h4>
              <p className="text-muted-foreground text-sm">{t("contact_form_subtitle")}</p>
            </div>
            <form
              className="space-y-4 p-6 pt-0 text-sm"
              action={handleSubmit}
              noValidate
              ref={form}>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder={t("contact_form_first_name")}
                  className="w-1/2 px-4 py-2 rounded border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder={t("contact_form_last_name")}
                  className="w-1/2 px-4 py-2 rounded border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder={t("contact_form_email")}
                className="w-full px-4 py-2 rounded border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
              />
              <input
                type="text"
                name="subject"
                placeholder={t("contact_form_subject")}
                className="w-full px-4 py-2 rounded border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
              />
              <textarea
                name="message"
                placeholder={t("contact_form_message")}
                rows={4}
                className="w-full px-4 py-2 rounded border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2 rounded bg-primary text-primary-foreground font-semibold hover:bg-primary-glow transition-colors text-base mt-2">
                <FaPaperPlane className="text-lg" />
                {t("contact_form_button")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
