import React from "react";
import { useTranslation } from "react-i18next";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skillIcons = {
  HTML: <SiHtml5 className="inline mr-2 text-orange-500 text-2xl" title="HTML5" />,
  CSS: <SiCss3 className="inline mr-2 text-blue-500 text-2xl" title="CSS3" />,
  JavaScript: <SiJavascript className="inline mr-2 text-yellow-400 text-2xl" title="JavaScript" />,
  "Tailwind CSS": (
    <SiTailwindcss className="inline mr-2 text-cyan-400 text-2xl" title="Tailwind CSS" />
  ),
  React: <SiReact className="inline mr-2 text-cyan-500 text-2xl" title="React" />,
  Git: <SiGit className="inline mr-2 text-red-500 text-2xl" title="Git" />,
  GitHub: <SiGithub className="inline mr-2 text-gray-500 text-2xl" title="GitHub" />,
};

const Skills = () => {
  const { t } = useTranslation();
  const skills = t("skills_list", { returnObjects: true });
  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-8 md:px-16 lg:px-0 container mx-auto max-w-4xl animate-fadein">
      <h2 className="text-4xl font-bold mb-8 text-center text-accent drop-shadow-lg">
        {t("skills")}
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
        {skills.map((skill, idx) => (
          <li
            data-aos="zoom-in"
            key={idx}
            className="px-4 py-2 bg-accent text-accent dark:text-white rounded text-lg font-medium shadow-md w-full text-center flex items-center justify-center">
            {skillIcons[skill] || null}
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
