"use client";

import { useState } from "react";
import saveAs from "file-saver";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_message: "",
    user_email: "",
    user_contact: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleDownload = () => {
    const pdfUrl = "/cv.pdf";
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, "cv.pdf"))
      .catch((error) => console.error("Error downloading CV:", error));
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#354F52] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT SIDE - FORM */}
        <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit} className="bg-[#CAD2C5] rounded-xl text-xl flex flex-col gap-6 p-8 shadow-lg w-full max-w-md">
            <span>Hi Alifiyah!</span>
            <span>
              My name is{" "}
              <input
                placeholder="Your name"
                type="text"
                className="bg-transparent border-b-2 border-b-black outline-none"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
              />
            </span>
            <textarea
              placeholder="Write your Message Here!"
              rows={6}
              className="bg-transparent border-b-2 border-b-black outline-none resize-none"
              name="user_message"
              value={formData.user_message}
              onChange={handleInputChange}
            />
            <span>You can Contact me via:</span>
            <span>
              Email{" "}
              <input
                placeholder="Your Email"
                required={true}
                name="user_email"
                type="email"
                className="bg-transparent border-b-2 border-b-black outline-none"
                value={formData.user_email}
                onChange={handleInputChange}
              />
            </span>
            <span>
              Contact{" "}
              <input
                placeholder="Your phone number"
                type="tel"
                name="user_contact"
                className="bg-transparent border-b-2 border-b-black outline-none"
                value={formData.user_contact}
                onChange={handleInputChange}
              />
            </span>
            <span>Regards,</span>
            <button type="submit" className="bg-[#2F3E46] text-white rounded font-semibold p-4 hover:bg-gray-700 transition duration-300">
              Send
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - RESUME BUTTON AND ANIMATION */}
        <div className="flex flex-col items-center justify-center relative">
          {/* Downloadable Resume Button */}
          <button
            className="bg-[#CAD2C5] text-[#2F3E46] px-6 py-3 rounded-full hover:bg-gray-600 hover:text-white transition duration-300 mb-8 text-lg font-semibold"
            onClick={handleDownload}
          >
            View My Resume
          </button>

          {/* Animation */}
          <div className="w-full max-w-xl">
            <iframe
              src="https://lottie.host/embed/a005a9fc-285d-4174-b19a-a1b2ad605329/go6GsdstGg.json"
              width="100%"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Media Links - Centered at the bottom */}
      <div className="flex justify-center space-x-6 mt-12">
        <SocialLink href="https://www.linkedin.com/in/alifiyahshahid/" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
        <SocialLink href="https://github.com/alifiyah29" src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
        <SocialLink href="https://www.instagram.com/alifiyah_shahid/" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
      </div>
    </section>
  );
};

const SocialLink = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
    <img src={src} alt={alt} width="40" height="40" />
  </a>
);

export default ContactPage;