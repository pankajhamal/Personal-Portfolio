import React from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lyjz1e5",
        "template_787ikxe",
        e.target,
        "Q2GE3koPZjOK0-Ijr"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <Element name="contact">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          
          {/* Header */}
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Contact Me
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Please leave your email and message below, I will get back to you as soon as possible.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={sendEmail} className="space-y-5 w-full max-w-2xl text-sm sm:text-base md:text-lg">
            
            {/* Name Input */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1">
                Name:
              </label>
              <input
                type="text"
                name="full_name"
                placeholder="Enter your name"
                className="w-full px-3 sm:px-4 py-2 bg-[#f5f7fa] rounded-lg border border-black focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1">
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full px-3 sm:px-4 py-2 rounded-lg border bg-[#f5f7fa] border-black focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1">
                Message:
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full px-3 sm:px-4 py-2 rounded-lg border bg-[#f5f7fa] border-black focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
              ></textarea>
            </div>

            <div className="mt-2">
              <p className="text-sm sm:text-base md:text-lg text-gray-500 text-center">
                Or reach out directly at{" "}
                <a
                  href="mailto:hello@example.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  pankajhamal0@gmail.com
                </a>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-green-600 text-sm sm:text-base md:text-lg text-white font-medium py-2.5 sm:py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;