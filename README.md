# Portfolio

A modern, single-page portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Easily showcase your projects, skills, and contact information with a clean, responsive design.

## Features

- ⚡️ Fast development with Vite
- 🎨 Customizable with Tailwind CSS
- 🌙 Dark mode support
- 🈶 Arabic language support
- 🌍 i18n (internationalization) ready
- 📱 Fully responsive design
- ✨ Animated sections (AOS)
- 📧 Contact form with EmailJS integration

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Start the local development server:

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) to view your portfolio.

### Build for Production

```bash
npm run build
# or
yarn build
```

The output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Customization

- **Content:** Edit the files in `src/components/` to update your About, Projects, Skills, and Contact sections.
- **Styling:** Modify `src/App.css` or use Tailwind utility classes for custom styles.
- **Assets:** Replace images in `src/assets/` with your own.
- **i18n:** Update `src/i18n.js` for translations.
- **Dark Mode:** Toggle dark mode by adding/removing the `dark` class on `<html>` (see Tailwind docs).

## Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [AOS](https://michalsnik.github.io/aos/)
- [EmailJS](https://www.emailjs.com/)
- [react-i18next](https://react.i18next.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
