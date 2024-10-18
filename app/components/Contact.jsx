"use client";

import saveAs from "file-saver";

const ContactPage = () => {
  const handleDownload = () => {
    const pdfUrl = "/cv.pdf";
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, "cv.pdf"));
  };
  return (
    <section
      id="contact"
      className="h-full min-h-screen bg-gradient-to-b from-[#52796F] to-[#2F3E46] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        {/* LEFT SIDE - FORM */}
        <div className="flex items-center justify-center h-full">
          <form className="bg-[#CAD2C5] rounded-xl text-xl flex flex-col mt-9 gap-6 justify-center p-8 shadow-lg mx-auto">
            <span>
              Hi Alifiyah!
              <span className="text-[#CAD2C5]">Hi Alifiyah qwertyuiopasdfghjklzxcvbnm!</span>
            </span>
            <span>
              My name is{" "}
              <input
                placeholder="Your name"
                type="text"
                className="bg-transparent border-b-2 border-b-black outline-none"
                name="user_name"
              />
            </span>
            <textarea
              placeholder="Write your Message Here!"
              rows={6}
              className="bg-transparent border-b-2 border-b-black outline-none resize-none"
              name="user_message"
            />
            <span>You can Contact me via:</span>
            <span>
              Email{" "}
              <input
                placeholder="Your Email"
                required={true}
                name="user_email"
                type="text"
                className="bg-transparent border-b-2 border-b-black outline-none"
              />
            </span>
            <span>
              Contact{" "}
              <input
                placeholder="Your phone number"
                type="tel"
                name="user_contact"
                className="bg-transparent border-b-2 border-b-black outline-none"
              />
            </span>

            <span>Regards,</span>
            <button className="bg-[#2F3E46] text-white rounded font-semibold p-4 hover:bg-gray-700">
              Send
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - RESUME BUTTON AND ANIMATION */}
        <div className="relative flex flex-col justify-center">
          {/* Downloadable Resume Button */}
          <div className="absolute top-0 right-0 mr-4 mt-10">
            <button
              className="bg-[#CAD2C5] text-[#2F3E46] px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white transition duration-300 inline-block"
              onClick={handleDownload}
            >
              View My Resume
            </button>
          </div>

          {/* Animation at the bottom right */}
          <div className="absolute bottom-0 right-0 mb-4 mr-4">
            <iframe
              src="https://lottie.host/embed/a005a9fc-285d-4174-b19a-a1b2ad605329/go6GsdstGg.json"
              width="700"
              height="700"
              style={{ border: "none", overflow: "hidden" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Media Links - Centered at the bottom */}
      <div className="flex justify-center space-x-4 mt-6 lg:mt-0">
        <a
          href="https://www.linkedin.com/in/alifiyahshahid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            width="40"
            height="40"
          />
        </a>
        <a
          href="https://github.com/alifiyah29"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
            alt="GitHub"
            width="40"
            height="40"
          />
        </a>
        <a
          href="https://www.instagram.com/alifiyah_shahid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
            width="40"
            height="40"
          />
        </a>
      </div>
    </section>
  );
};

export default ContactPage;
