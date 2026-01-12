import React from "react";

const Contact = () => {
  return (
    <div className="w-4xl p-8">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Contact Me
          </h1>
          <p className="text-gray-600">
            Please leave your email and message below, I will get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5 w-2xl">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
            ></textarea>
          </div>

           <div className="mt-2 ">
          <p className="text-sm text-gray-500 text-center">
            Or reach out directly at{' '}
            <a href="mailto:hello@example.com" className="text-blue-600 hover:text-blue-700 font-medium">
              pankajhamal0@gmail.com
            </a>
          </p>
        </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-1/2 bg-green-600 text-white font-medium py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Contact;
