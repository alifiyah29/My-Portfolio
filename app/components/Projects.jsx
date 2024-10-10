// components/Projects.js
"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      image: "/Chatify.jpg",
      title: "Chatify",
      link: "https://github.com/alifiyah29/Chatify",
      description:
        "Developed a real-time chat app using MVC architecture with Next.js and Socket.io, handling over 100 messages daily. Implemented a responsive UI with server-side rendering for improved performance and SEO, managed scalable user data and chat histories with MongoDB, and deployed on AWS, reducing deployment time by 50%.",
    },
    {
      image:
        "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Task-Alchemy",
      link: "https://github.com/alifiyah29/ToDo-App",
      description:
        "Developed a ticketing system using Next.js for a seamless user experience and secure task management, leveraging Redux for state consistency and a backend API for reliable data handling.",
    },
    {
      image: "/GameGenre.png",
      title: "Game Genre Analysis",
      link: "https://github.com/alifiyah29",
      description:
        "Developed a hybrid database integrating MySQL and MongoDB for player behavior analysis, utilizing Apache Kafka for real-time data processing and Tableau to create interactive dashboards, providing actionable insights and improving decision-making.",
    },
    {
      image: "/AirQuality.png",
      title: "Air Quality Monitoring System",
      link: "https://github.com/alifiyah29",
      description:
        "Developed an Arduino-based system for real-time air quality monitoring, built a web platform with interactive data visualization charts, and analyzed patterns to publish findings for improved air quality management.",
    },
    {
      image:
        "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Let Us Write Online",
      link: "https://github.com/alifiyah29",
      description:
        "Developed a scalable blogging platform using the MERN stack, leading the development and deployment while implementing user engagement features that drove platform growth.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-[#52796F] text-darkText px-4"
    >
      {/* Top Section: Title and Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col lg:flex-row items-center justify-center mb-8"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold text-black mb-4 lg:mb-0 lg:text-center">
          My Projects
        </h2>

        {/* Animation */}
        <div className="flex justify-center lg:justify-start">
          <iframe
            src="https://lottie.host/embed/12354a77-716f-4c34-9ace-5639e20dc635/CiJMRA50az.json"
            width="250"
            height="250"
            frameBorder="0"
            style={{ border: "none", overflow: "hidden" }}
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#84A98C] p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Project Title (Link) */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-[#354F52] hover:underline"
            >
              {project.title}
            </a>

            {/* Project Description */}
            <p className="text-gray-100 text-sm">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
