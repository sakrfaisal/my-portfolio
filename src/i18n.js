import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      hero_greeting: "Hello, world!",
      hero_name: "Hi, I'm Sakhr",
      my_name: "Sakhr",
      hero_tagline:
        "Frontend Developer passionate about building beautiful, interactive, and accessible web experiences.",
      hero_contact: "Contact Me",
      about: "About Me",
      about_subtitle:
        "Self-taught developer with a passion for creating meaningful digital experiences",
      about_content: `I’m a Frontend Developer from Saudi Arabia, recently graduated from high school. I love building responsive and interactive websites using HTML, CSS, JavaScript, Tailwind CSS, and React.\n\nI’m always eager to learn, collaborate, and create digital experiences that make a difference.`,
      about_name: "I'm Sakhr Faisal",
      about_title: "Frontend Developer",
      location: "Location",
      location_value: "Saudi Arabia",
      email: "Email",
      email_value: "sakr1772007@gmail.com",
      skills: "Skills",
      skills_subtitle: "A comprehensive toolkit for building modern, scalable applications.",
      skills_list: ["HTML", "CSS", "JavaScript", "Tailwind", "React", "Git", "GitHub"],
      projects: "Projects",
      projects_subtitle:
        "A showcase of my recent work, demonstrating skills in modern web development",
      project_list: [
        {
          name: "space-tourism-website",
          description:
            "A multi-page space exploration website with interactive navigation and responsive design, showcasing destinations, crew, and technology.",
          url: "https://github.com/sakrfaisal/space-tourism-website",
          skills: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
        },
        {
          name: "url-shortener-landing-page",
          description:
            "A landing page for a URL shortening service, with user-friendly interface and real-time link management.",
          url: "https://github.com/sakrfaisal/url-shortener-landing-page",
          skills: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
        },
        {
          name: "team-portfolio",
          description:
            "A team portfolio website with a modern and responsive design, showcasing team members, their skills, and projects.",
          url: "https://github.com/sakrfaisal/team-portfolio",
          skills: ["HTML", "CSS"],
        },
        {
          name: "dashboard",
          description:
            "A responsive and interactive dashboard for managing a company's team members, projects, and tasks.",
          url: "https://github.com/sakrfaisal/dashboard",
          skills: ["HTML", "CSS"],
        },
        {
          name: "browser-extension-manager-ui",
          description:
            "A user interface for managing browser extensions, with dark mode and intuitive controls.",
          url: "https://github.com/sakrfaisal/browser-extension-manager-ui",
          skills: ["HTML", "CSS", "JavaScript", "Tailwind"],
        },
        {
          name: "product-list-with-cart-main",
          description:
            "A product list with a cart, with a modern and responsive design, showcasing products, their prices, and a cart to add and remove products.",
          url: "https://github.com/sakrfaisal/product-list-with-cart-main",
          skills: ["HTML", "CSS", "JavaScript"],
        },
      ],
      view_all_projects: "View All Projects",
      lets_talk: "Let's Talk",
      contact: "Contact",
      contact_email: "sakr1772007@gmail.com",
      contact_form_placeholder: "Contact form coming soon!",
      contact_heading: "Get In Touch",
      contact_subheading:
        "Have a project in mind? Let's work together to bring your ideas to life.",
      contact_left_title: "Let's start a conversation",
      contact_left_body:
        "I'm always interested in hearing about new projects and opportunities. Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, I'd love to hear from you.",
      contact_email_label: "Email",
      contact_phone_label: "Phone",
      contact_location_label: "Location",
      contact_form_title: "Send me a message",
      contact_form_subtitle:
        "Fill out the form below and I'll get back to you as soon as possible.",
      contact_location_value: "Saudi Arabia, Riyadh",
      contact_form_first_name: "First Name",
      contact_form_last_name: "Last Name",
      contact_form_email: "Email Address",
      contact_form_subject: "Subject",
      contact_form_message: "Your message...",
      contact_form_button: "Send Message",
      contact_form_success: "Message sent! (demo only)",
      footer_title: "Sakhr Developer",
      footer_description: "Building the future, one line of code at a time.",
      footer_made_with: "Made with",
      footer_by: "by",
      footer_rights: "All rights reserved © 2025",
    },
  },
  ar: {
    translation: {
      home: "الرئيسية",
      hero_greeting: "مرحباً بالعالم!",
      hero_name: "مرحباً، أنا صخر",
      my_name: "صخر",
      hero_tagline: "مطور واجهات أمامية شغوف ببناء تجارب ويب جميلة وتفاعلية.",
      hero_contact: "تواصل معي",
      about: "عنّي",
      about_subtitle: "مطور ذاتي التعلم يحب صناعة تجارب رقمية مميزة",
      about_content: `أنا مطور واجهات أمامية من السعودية، خريج مدرسة ثانوية. أحب بناء مواقع تفاعلية ومتجاوبة باستخدام HTML وCSS وJavaScript وTailwind CSS وReact.\n\nأسعى دائمًا للتعلم والتعاون وصناعة تجارب رقمية مميزة.`,
      about_name: "أنا صخر فيصل",
      about_title: "مطور واجهات أمامية",
      location: "الموقع",
      location_value: "المملكة العربية السعودية",
      email: "البريد الإلكتروني",
      email_value: "sakr1772007@gmail.com",
      skills: "المهارات",
      skills_subtitle: "مهارات متكاملة لبناء تطبيقات مميزة وقابلة للتطوير.",
      skills_list: ["HTML", "CSS", "JavaScript", "Tailwind", "React", "Git", "GitHub"],
      projects: "المشاريع",
      projects_subtitle: "نماذج لأعمالي الاخيرة التي تبرز مهاراتي في تطوير الويب",
      project_list: [
        {
          name: "space-tourism-website",
          description:
            "موقع سياحي فضائي متعدد الصفحات مع تنقل تفاعلي وتصميم متجاوب، يعرض الوجهات والطاقم والتقنيات.",
          url: "https://github.com/sakrfaisal/space-tourism-website",
          skills: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
        },
        {
          name: "url-shortener-landing-page",
          description:
            "صفحة هبوط لخدمة تقصير الروابط، بواجهة سهلة الاستخدام وإدارة روابط في الوقت الفعلي.",
          url: "https://github.com/sakrfaisal/url-shortener-landing-page",
          skills: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
        },
        {
          name: "team-portfolio",
          description:
            "موقع لتعريف الفريق وعرض مشاريعهم ومهاراتهم، مع تصميم متجاوب ومعلومات التواصل.",
          url: "https://github.com/sakrfaisal/team-portfolio",
          skills: ["HTML", "CSS"],
        },
        {
          name: "dashboard",
          description: "لوحة التحكم لإدارة الموظفين والمشاريع والمهام",
          url: "https://github.com/sakrfaisal/dashboard",
          skills: ["HTML", "CSS"],
        },
        {
          name: "browser-extension-manager-ui",
          description: "واجهة مستخدم لإدارة إضافات المتصفح، مع وضع داكن وتحكمات سهلة الاستخدام.",
          url: "https://github.com/sakrfaisal/browser-extension-manager-ui",
          skills: ["HTML", "CSS", "JavaScript", "Tailwind"],
        },
        {
          name: "product-list-with-cart-main",
          description:
            "قائمة منتجات، بتصميم عصري ومتجاوب، يعرض المنتجات وأسعارها وسلة لإضافة وإزالة المنتجات.",
          url: "https://github.com/sakrfaisal/product-list-with-cart-main",
          skills: ["HTML", "CSS", "JavaScript"],
        },
      ],
      view_all_projects: "عرض جميع المشاريع",
      lets_talk: "لنتحدث",
      contact: "تواصل",
      contact_email: "sakr1772007@gmail.com",
      contact_form_placeholder: "نموذج التواصل قادم قريبًا!",
      contact_heading: "اتصل بي",
      contact_subheading: "لديك مشروع في بالك؟ لنجعله حقيقة",
      contact_left_title: "لنبدأ محادثة",
      contact_left_body:
        "أنا دائماً أهتم بسماع المشاريع الجديدة والفرص. سواء كنت شركة تبحث عن التنظيم أو أنت مطور آخر مهتم بالتعاون، سأكون سعيداً بالتواصل معك.",
      contact_email_label: "البريد الإلكتروني",
      contact_phone_label: "الهاتف",
      contact_location_label: "الموقع",
      contact_location_value: "المملكة العربية السعودية, الرياض",
      contact_form_title: "أرسل لي رسالة",
      contact_form_subtitle: "ملئ صفحة النموذج أدناه وسأتواصل معك في أقرب وقت.",
      contact_form_first_name: "الاسم الأول",
      contact_form_last_name: "الاسم الأخير",
      contact_form_email: "البريد الإلكتروني",
      contact_form_subject: "الموضوع",
      contact_form_message: "رسالتك...",
      contact_form_button: "أرسل الرسالة",
      contact_form_success: "تم إرسال الرسالة! (العرض فقط)",
      footer_title: "المبرمج صخر",
      footer_description: "نبني المستقبل، حرف واحد من الكود في كل مرة.",
      footer_made_with: "برمج بال",
      footer_by: "بواسطة صخر",
      footer_rights: "جميع الحقوق محفوظة © 2025",
    },
  },
};

const storedLang = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
const initialLang = storedLang || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: initialLang, // use stored language or fallback to English
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// Set direction on initial load
if (typeof window !== "undefined") {
  document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
}

export default i18n;
