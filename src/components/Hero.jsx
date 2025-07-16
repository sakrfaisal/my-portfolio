import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import sakhrLogo from "../assets/sakhr.webp";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-muted/30 pt-16">
      <section
        id="hero"
        className="flex flex-col items-center justify-center text-center py-14 px-4 sm:px-8 md:px-16 lg:px-0 min-h-[calc(100vh-72px)]">
        <span className="text-lg sm:text-xl text-muted-foreground mb-2">{t("hero_greeting")}</span>
        <div
          data-aos="fade-left"
          className="flex items-center justify-center mb-4 bg-accent w-30 h-30 rounded-full shadow-lg overflow-hidden shrink-0">
          <img
            src={sakhrLogo}
            alt="sakr"
            width="164"
            height="202"
            className="w-40 h-40 rounded-full object-contain shadow-lg bg-background p-2"
          />
        </div>
        <h1
          data-aos="fade-right"
          className="text-5xl sm:text-6xl font-extrabold mb-4 text-primary drop-shadow-lg">
          {t("hero_name")}
        </h1>
        <p
          data-aos="fade-right"
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-foreground">
          {t("hero_tagline")}
        </p>
        <div data-aos="fade-right" className="flex gap-6 justify-center mb-8">
          <a
            href="https://github.com/sakrfaisal"
            target="_blank"
            rel="noopener noreferrer"
            name="GitHub Profile"
            className="text-[#333] hover:text-[#24292f] dark:text-[#ddd] dark:hover:text-white text-3xl transition-colors"
            aria-label="GitHub">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/%D8%B5%D8%AE%D8%B1-%D9%81%D9%8A%D8%B5%D9%84-%D8%A7%D9%84%D9%87%D8%AA%D8%A7%D8%B1-865145270"
            target="_blank"
            rel="noopener noreferrer"
            name="LinkedIn Profile"
            className="text-[#0077b5] hover:text-[#005983] dark:text-[#8ecae6] dark:hover:text-[#219ebc] text-3xl transition-colors"
            aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/dev_sakhr"
            target="_blank"
            rel="noopener noreferrer"
            name="Twitter Profile"
            className="text-[#1da1f2] hover:text-[#0d8ddb] dark:text-[#60a5fa] dark:hover:text-[#38bdf8] text-3xl transition-colors"
            aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
        <div className="flex gap-4 justify-center" data-aos="fade-up">
          <a
            href="https://wa.me/966533246842"
            target="_blank"
            rel="noopener noreferrer"
            name="WhatsApp Contact"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-600 hover:bg-green-700 text-sm font-semibold text-white shadow-lg transition-all duration-300">
            <FaWhatsapp className="text-2xl" />
            {t("lets_talk")}
          </a>
          <a
            href="#projects"
            name="View Projects Section"
            className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-semibold text-secondary-foreground shadow hover:bg-accent transition-colors">
            {t("view_all_projects")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
