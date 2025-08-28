import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 
             bg-gradient-to-b from-white to-gray-100 
             dark:from-gray-900 dark:to-gray-800 
             text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <h2 className="text-4xl font-bold text-indigo-600 mb-6">Contact Me</h2>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input type="text" placeholder="Name" className="p-3 border rounded-lg" />
        <input type="email" placeholder="Email" className="p-3 border rounded-lg" />
        <textarea placeholder="Message" className="p-3 border rounded-lg"></textarea>
        <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-500 transition">
          Send Message
        </button>
      


      </form>
    </section>
  );
};

export default Contact;
