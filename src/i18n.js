import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hero_greeting: "Hello, world!",
      hero_name: "Hi, I'm Sakhr",
      hero_tagline:
        "Frontend Developer passionate about building beautiful, interactive, and accessible web experiences.",
      hero_contact: "Contact Me",
      about: "About",
      about_content: `I’m a Frontend Developer from Saudi Arabia, recently graduated from high school. I love building responsive and interactive websites using HTML, CSS, JavaScript, Tailwind CSS, and React.\n\nI’m always eager to learn, collaborate, and create digital experiences that make a difference.`,
      about_name: "I'm Sakhr Faisal",
      about_title: "Frontend Developer",
      location: "Location",
      location_value: "Saudi Arabia",
      email: "Email",
      email_value: "sakr1772007@gmail.com",
      skills: "Skills",
      skills_list: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Git", "GitHub"],
      projects: "Projects",
      project_list: [
        {
          name: "dashboard",
          tag: "challenge",
          description:
            "A responsive and interactive dashboard for managing a company's team members, projects, and tasks.",
          url: "https://github.com/sakrfaisal/dashboard",
        },
        {
          name: "space-tourism-website",
          tag: "challenge",
          description:
            "A multi-page space exploration website with interactive navigation and responsive design, showcasing destinations, crew, and technology.",
          url: "https://github.com/sakrfaisal/space-tourism-website",
        },
        {
          name: "team-portfolio",
          tag: "challenge",
          description:
            "A team portfolio website with a modern and responsive design, showcasing team members, their skills, and projects.",
          url: "https://github.com/sakrfaisal/team-portfolio",
        },
        {
          name: "url-shortener-landing-page",
          tag: "challenge",
          description:
            "A landing page for a URL shortening service, with user-friendly interface and real-time link management.",
          url: "https://github.com/sakrfaisal/url-shortener-landing-page",
        },
        {
          name: "browser-extension-manager-ui",
          tag: "challenge",
          description:
            "A user interface for managing browser extensions, with dark mode and intuitive controls.",
          url: "https://github.com/sakrfaisal/browser-extension-manager-ui",
        },
      ],
      view_all_projects: "View All Projects",
      lets_talk: "Let's Talk",
      contact: "Contact",
      contact_email: "sakr1772007@gmail.com",
      contact_form_placeholder: "Contact form coming soon!",
    },
  },
  ar: {
    translation: {
      hero_greeting: "مرحباً أيها العالم!",
      hero_name: "مرحباً، أنا صخر",
      hero_tagline: "مطور واجهات أمامية شغوف ببناء تجارب ويب جميلة وتفاعلية.",
      hero_contact: "تواصل معي",
      about: "عنّي",
      about_content: `أنا مطور واجهات أمامية من السعودية، تخرجت مؤخرًا من المدرسة الثانوية. أحب بناء مواقع تفاعلية ومتجاوبة باستخدام HTML وCSS وJavaScript وTailwind CSS وReact.\n\nأسعى دائمًا للتعلم والتعاون وصناعة تجارب رقمية مميزة.`,
      about_name: "أنا صخر فيصل",
      about_title: "مطور واجهات أمامية",
      location: "الموقع",
      location_value: "المملكة العربية السعودية",
      email: "البريد الإلكتروني",
      email_value: "sakr1772007@gmail.com",
      skills: "المهارات",
      skills_list: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Git", "GitHub"],
      projects: "المشاريع",
      project_list: [
        {
          name: "dashboard",
          tag: "challenge",
          description: "لوحة التحكم لإدارة الموظفين والمشاريع والمهام",
          url: "https://github.com/sakrfaisal/dashboard",
          skills: ["HTML", "CSS"],
        },
        {
          name: "space-tourism-website",
          tag: "challenge",
          description:
            "موقع سياحي فضائي متعدد الصفحات مع تنقل تفاعلي وتصميم متجاوب، يعرض الوجهات والطاقم والتقنيات.",
          url: "https://github.com/sakrfaisal/space-tourism-website",
          skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"],
        },
        {
          name: "team-portfolio",
          tag: "challenge",
          description:
            "موقع لتعريف الفريق وعرض مشاريعهم ومهاراتهم، مع تصميم متجاوب ومعلومات التواصل.",
          url: "https://github.com/sakrfaisal/team-portfolio",
          skills: ["HTML", "CSS"],
        },
        {
          name: "url-shortener-landing-page",
          tag: "challenge",
          description:
            "صفحة هبوط لخدمة تقصير الروابط، بواجهة سهلة الاستخدام وإدارة روابط في الوقت الفعلي.",
          url: "https://github.com/sakrfaisal/url-shortener-landing-page",
          skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"],
        },
        {
          name: "browser-extension-manager-ui",
          tag: "challenge",
          description: "واجهة مستخدم لإدارة إضافات المتصفح، مع وضع داكن وتحكمات سهلة الاستخدام.",
          url: "https://github.com/sakrfaisal/browser-extension-manager-ui",
          skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        },
      ],
      view_all_projects: "عرض جميع المشاريع",
      lets_talk: "دعنا نتحدث",
      contact: "تواصل",
      contact_email: "sakr1772007@gmail.com",
      contact_form_placeholder: "نموذج التواصل قادم قريبًا!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
