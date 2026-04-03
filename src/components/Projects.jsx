import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import campus from "../assets/campus.png"
import students from "../assets/students.png"
import goAdvance from "../assets/goAdvance.png";
import todo from "../assets/todo.png"
import Weather from "../assets/Weather.png"
import { GoLinkExternal } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import tot from "../assets/tot.png"
import academic from "../assets/academic.png";
import med from "../assets/med-care.png";
import odoo from "../assets/odoo.png";


const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const projects = [
    {
      title: 'E.G.S Pillay Academic Hub',
      photo: academic,
      description: 'EGS Learning Platform is a full-stack educational web application for students, staff, and administrators.It offers structured access to study materials, online tests, and performance tracking.The platform supports real-time chat, cloud-based file sharing, and an AI assistant for interactive learning.With role-based access control, it ensures a secure, scalable, and efficient learning environment.',
      tech: ['React', 'Node.js', "Express.js", 'MongoDB Atlas',"Tailwindcss"],
      liveLink: "https://e-g-s-learning-platform-rwqx.vercel.app/",
      githubLink: "https://github.com/Abinesh025/E.G.S-Learning-platform"
    },
    {
      title: 'Tutorial Hub',
      photo: tot,
      description: 'Tutorial Hub is an educational platform that provides structured tutorials, guides, and resources for technologies like Arduino, Raspberry Pi, and ESP32. It helps learners understand concepts easily through organized modules, practical examples, and interactive content.',
      tech: ['React', 'Tailwind CSS', "Prebuild UI", 'Responsive UI'],
      liveLink: "https://egs-tutorial.netlify.app/",
      githubLink: "https://github.com/Abinesh025/Iot"
    },
    {
      title: 'GoAdvance Digital Marketing',
      photo: goAdvance,
      description: 'GoAdvance Digital Marketing Projects enhances brand visibility and drives business growth through strategic digital marketing solutions.It focuses on data-driven campaigns, targeted audience engagement, and performance optimization.The platform leverages SEO, social media marketing, and analytics to maximize reach and conversions.It helps businesses build a strong online presence and improve customer interaction.With a results-oriented approach, it ensures measurable growth and long-term digital success.',
      tech: ['React', 'Web3 Forms API', 'Framer Motion', 'Prebuilt Ui' ,'Tailwind CSS'],
      liveLink: "https://go-advance.vercel.app/",
      githubLink: "https://github.com/Abinesh025/GoAdvance"
    },
    {
      title: 'ODOO - Reimbursement Management System',
      photo: odoo,
      description: 'The Reimbursement Management System is a MERN-based web application developed for the Odoo Hackathon to automate expense claims. It uses OCR to extract data from receipts and features a three-level approval workflow—Employee, Manager, and Finance—ensuring secure, transparent, and efficient processing with role-based access control.',
      tech: ['React', 'MongoDB', 'Node.js' ,'Tailwind CSS',"OCR"],
      liveLink: "https://odoo-hackathon-mu.vercel.app/",
      githubLink: "https://github.com/Abinesh025/ODOO-Hackathon"
    },
    {
      title: 'Med-Care',
      photo: med,
      description: 'MedCare is a full-stack healthcare web application designed to connect patients and medical professionals.It provides features like appointment booking, patient record management, and secure authentication.Users can access medical services, track health data, and communicate in real time.With a scalable architecture and role-based access control, it ensures a secure and efficient healthcare experience.',
      tech: ['React', 'MongoDB', 'Framer Motion', 'Node.js' ,'Tailwind CSS',"Google Colab"],
      liveLink: "https://med-care-plum-eight.vercel.app/",
      githubLink: "https://github.com/Abinesh025/Med-Care"
    },
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
    }
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
