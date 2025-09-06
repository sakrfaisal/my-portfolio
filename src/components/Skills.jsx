import { useTranslation } from "react-i18next";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skillIcons = {
  HTML: <SiHtml5 className="inline text-orange-500 text-2xl" title="HTML5" />,
  CSS: <SiCss3 className="inline text-blue-500 text-2xl" title="CSS3" />,
  JavaScript: <SiJavascript className="inline text-yellow-400 text-2xl" title="JavaScript" />,
  TypeScript: <SiTypescript className="inline text-blue-500 text-2xl" title="TypeScript" />,
  Tailwind: <SiTailwindcss className="inline text-cyan-400 text-2xl" title="Tailwind CSS" />,
  React: <SiReact className="inline text-cyan-500 text-2xl" title="React" />,
  Next: <SiNextdotjs className="inline text-white text-2xl" title="Next.js" />,
  Git: <SiGit className="inline text-red-500 text-2xl" title="Git" />,
  GitHub: <SiGithub className="inline text-gray-500 text-2xl" title="GitHub" />,
};

const Skills = () => {
  const { t } = useTranslation();
  const skills = t("skills_list", { returnObjects: true });
  return (
    <div className="bg-muted/30">
      <section
        id="skills"
        className="py-18 px-4 sm:px-8 md:px-16 lg:px-0 container mx-auto max-w-4xl animate-fadein">
        <h2 className="text-4xl font-bold mb-2 text-center text-gradient drop-shadow-lg">
          {t("skills")}
        </h2>
        <p className="text-center mb-14 text-muted-foreground">{t("skills_subtitle")}</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
          {skills.map((skill, idx) => (
            <li
              data-aos="zoom-in"
              key={idx}
              className="px-4 py-2 bg-accent text-accent-foreground rounded text-lg font-medium shadow-md w-full text-center flex items-center justify-center gap-3">
              {skillIcons[skill] || null}
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Skills;
