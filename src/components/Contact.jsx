import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Required";
    if (!form.email) errs.email = "Required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message) errs.message = "Required";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      data-aos="fade-up"
      id="contact"
      className="snap-start py-16 px-4 sm:px-8 md:px-16 lg:px-0 container mx-auto max-w-xl animate-fadein">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-accent text-center">
        {t("contact")}
      </h2>
      <div className="mb-6 text-center">
        <span className="font-semibold">Email:</span>{" "}
        <a
          href={`mailto:${t("contact_email")}`}
          className="text-blue-600 dark:text-blue-400 underline">
          {t("contact_email")}
        </a>
      </div>
      <form className="space-y-6 relative" onSubmit={handleSubmit} noValidate>
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={`w-full px-4 py-2 rounded border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white`}
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && (
            <div className="text-red-500 text-xs absolute top-full left-0">{errors.name}</div>
          )}
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`w-full px-4 py-2 rounded border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white`}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="text-red-500 text-xs absolute top-full left-0">{errors.email}</div>
          )}
        </div>
        <div className="relative">
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className={`w-full px-4 py-2 rounded border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white`}
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && (
            <div className="text-red-500 text-xs -mt-1 absolute top-full left-0">
              {errors.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 dark:bg-blue-400 dark:text-black dark:hover:bg-blue-500 transition-colors">
          Send
        </button>
        {submitted && (
          <div className="text-green-600 text-center mt-2 absolute top-full left-0 w-full">
            Message sent! (demo only)
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
