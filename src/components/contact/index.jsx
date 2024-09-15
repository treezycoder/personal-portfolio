import { useState } from "react";
import { useGlobalState } from "../../context";

export default function Contact() {
  const { contactRef } = useGlobalState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct mailto URL with form data
    const mailtoLink = `mailto:treezyvarrick@gmail.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;

    // Open the user's mail app with the mailto link
    window.location.href = mailtoLink;
    alert(
      `Thank you, ${formData.name}! Your message has been opened in your email app.`
    );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      ref={contactRef}
      id="contact"
      className="w-full flex justify-center items-center py-10 px-4"
    >
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-indigo-500/10 rounded-lg p-8">
        <h6 className="text-2xl md:text-3xl text-gray-800 dark:text-white text-center font-semibold mb-8">
          Contact Me
        </h6>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          I'd love to hear from you! Let's Start a Conversation
        </p>
        <form
          netlify
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              onChange={handleChange}
              value={formData.name}
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md py-2 px-4 border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 transition-all"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md py-2 px-4 border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 transition-all"
              required
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="message"
              className="text-sm text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              onChange={handleChange}
              value={formData.message}
              id="message"
              name="message"
              placeholder="Your message"
              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md py-2 px-4 border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 transition-all h-32"
              required
            />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-indigo-300 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
