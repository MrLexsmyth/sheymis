"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g. send to email API or database)
    console.log("Form submitted:", formData);
  };

  return (
    <motion.section
      className="px-6 py-20 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center font-abel mb-1">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Please complete the form below
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 bg-white p-6 rounded-lg shadow-md"
      >
        {/* Name Fields */}
            <label className="block text-sm font-medium text-gray-700">
                Name (required) 
            </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-md outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-md outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-md outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-md outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-md outline-none focus:ring-2 focus:ring-black resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900 transition"
        >
          Submit
        </button>
      </form>

      {/* Store Location */}
<motion.div className="mt-6">
  <h3 className="text-xl font-semibold mb-1">Visit the Studio</h3>
  <p className="text-gray-700 font-light">
    <span className="font-bold text-xl "> Sheymis_art Studio</span>  <br />
    Opposite Tinuade Commercial 
    House, Tobi Rentals Bus-stop, <br />
    Ibadan, Oyo State, Nigeria.
  </p>
</motion.div>

    </motion.section>
  );
};

export default ContactPage;
