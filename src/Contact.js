// Contact.js
import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-90py-20 bg-gradient-to-r from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Interested in collaborating or hiring me? Reach out directly via email!
        </p>

        {/* Mailto button */}
        <a
          href="mailto:mrohith789@gmail.com" // 🔹 replace with your email
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
