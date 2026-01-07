import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import campus from "../assets/campus.png"
import students from "../assets/students.png"
import todo from "../assets/todo.png"
import Weather from "../assets/Weather.png"
import { GoLinkExternal } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";


const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const projects = [
    {
      title: 'Campus Thoughts',
      photo: campus,
      description: 'Campus Thoughts is a platform where students share ideas, experiences, and opinions from campus life. It encourages open discussion, creativity, and meaningful connections among students.',
      tech: ['React', 'Node.js', 'MongoDB', 'Daisy UI' ,'Tailwind CSS'],
      liveLink: "https://campus-thoughts-4.onrender.com",
      githubLink: "https://github.com/Abinesh025/Campus-Thoughts"
    },
    {
      title: 'Student Management System',
      photo: students,
      description: 'Stores student personal and academic details in a structured database.Built using React, Node.js, Express, and MongoDB for efficient data management, mama 📘💾 ',
      tech:  ['React', 'Node.js', 'MongoDB', 'Prebuilt UI','Tailwind CSS'],
      liveLink: 'https://mern-std-management-1.onrender.com',
      githubLink: "https://github.com/Abinesh025/MERN-STD-Management",
    },
    {
      title: 'To-Do ',
      photo: todo,
      description: 'A To-Do List app helps users add, edit, and delete tasks efficiently.It keeps daily activities organized and improves productivity.Users can track their progress by marking tasks as completed in real time.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Weather App',
      photo: Weather,
      description: 'A weather app powered by OpenWeatherMap providing real-time and accurate forecasts..Get live temperature, humidity, and weather conditions instantly.Plan your day better with hourly and weekly forecasts, mama ☀️🌧️',
      tech: ['HTML', 'CSS', 'JavaScript','Api'],
      liveLink:"" ,
      githubLink: "https://github.com/Abinesh025/weather-app004",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="card backdrop-blur-md bg-white/20 dark:bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/30"
        >
          <div className="card-body">
              <motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
  transition={{ duration: 0.6 }}
  className="
    text-center
    backdrop-blur-md bg-white/10 dark:bg-white/5
    rounded
    p-3
    shadow-xl
    border border-white/20
    sm:w-[80%] md:w-[50%] lg:w-[40vw]
  "
>
  <img
    src={project.photo}
    alt="project"
    className="
      w-full
      h-auto
      rounded
      object-contain
    "
  />
</motion.div>

            <h3 className="card-title text-2xl mb-2">{project.title}</h3>
            <p className="text-base-content/70 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="badge badge-primary badge-outline"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="card-actions justify-end">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Live Demo <GoLinkExternal />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                GitHub <AiFillGithub />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Projects
