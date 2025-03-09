import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Footer from "./Components/Footer";

function Contact() {
  return (
    <div>
      {/* Full-width Green Gradient Header */}
      <div className="w-full bg-gradient-to-r from-green-500 to-green-900 text-white py-24 text-center rounded-lg">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <div className="mt-4 text-lg font-semibold">
          <Link to="/" className="text-gray-300 hover:text-white">HOME</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-200">CONTACT</span>
        </div>
      </div>

      {/* Contact Form and Social Media Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-16">
        {/* Left - Contact Info & Social Media */}
        <div className="md:w-1/2 p-8 bg-white rounded-lg shadow-lg md:mr-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Just have a quick question?</h2>
          <p className="text-gray-700 mb-4">
            We're here to help you achieve your business goals with our innovative IT solutions. Whether you have a question, need a consultation, or want to discuss a project, our team is ready to assist you.
          </p>
          <p className="text-gray-700 mb-4">
            Get in touch with us today and let's explore how we can drive your business forward together.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
              className="p-4 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-blue-600 hover:text-white transition">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
              className="p-4 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-blue-400 hover:text-white transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
              className="p-4 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-blue-700 hover:text-white transition">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
              className="p-4 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-pink-600 hover:text-white transition">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="md:w-1/2 bg-white text-gray-900 p-8 rounded-lg shadow-lg mt-8 md:mt-0">
          <h2 className="text-2xl font-semibold text-center mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-left font-medium">Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-left font-medium">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-left font-medium">Message</label>
              <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-green-800 text-white py-2 rounded-md hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map and Contact Info Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-16 w-full">
        {/* Left - Google Map */}
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-96 border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62116.7271648416!2d74.70580958950012!3d13.331888796434576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb69938f41cf%3A0xcccc99e431850143!2sUdupi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1740764802962!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right - Contact Info */}
        <div className="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg mt-8 md:mt-0 md:ml-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Info</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-500 text-xl" />
              <span className="text-lg font-medium text-gray-800">+91-7975402353</span>
            </div>
            <hr />
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <span className="text-lg font-medium text-gray-800">Udupi, India</span>
            </div>
            <hr />
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-500 text-xl" />
              <span className="text-lg font-medium text-gray-800">glaniltauro.aiet@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;