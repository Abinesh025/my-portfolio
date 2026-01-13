import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Abi from "../assets/Abi.jpg"
import { FaCode } from "react-icons/fa6";
import { MdOutlineContactMail } from "react-icons/md";
import { PiReadCvLogoBold } from "react-icons/pi";
import { TbCertificate } from "react-icons/tb";


const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const cards = [
    {
      title: 'Total Projects',
      num:'02',
      content: 'Developed full-stack applications using React, Node.js, and MongoDB.',
      icon: <FaCode />,
    },
    {
      title: 'Certificates',
      num:'10',
      content: 'Earned certifications in web development, programming, and tools like Git and Postman.',
      icon: <TbCertificate />,
    }
  ]
  const name = "Abinesh";
const letters = name.split(""); 

  const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // ⬅ delay between each letter
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

    const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" ref={ref} className="py-20 relative z-10">

  {/* ABOUT TITLE */}
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
    transition={{ duration: 0.6 }}
    className="
      text-center rounded-2xl
      p-6 sm:p-10
      w-full md:w-[70%] lg:w-[40%]
      mx-auto mb-16
    "
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
      About Me
    </h2>
    <p className="text-sm sm:text-base text-base-content/70">
      ✧ Transforming ideas into digital experiences ✧
    </p>
  </motion.div>

  <div className="container mx-auto px-4">

    {/* TOP SECTION */}
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

      {/* IMAGE (TOP ON MOBILE) */}
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
    sm:w-[80%] md:w-[50%] lg:w-[20vw]
  "
>
        <img
          src={Abi}
          alt="Abinesh"
          className="rounded w-[220px] sm:w-[250px]"
        />
      </motion.div>

      {/* TEXT CONTENT */}
      <div
        className="
          order-2 lg:order-1
          flex flex-col
          items-center lg:items-start
          text-center lg:text-left
          max-w-xl
        "
      >
        <motion.h1
          variants={itemVariants}
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-bold
            bg-gradient-to-r from-primary to-secondary
            bg-clip-text text-transparent
          "
        >
          Hello, I'm
        </motion.h1>

        <motion.h2
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 flex gap-1"
>
  {letters.map((letter, index) => (
    <motion.span key={index} variants={letterVariants}>
      {letter}
    </motion.span>
  ))}
</motion.h2>


        <p className="text-sm sm:text-base text-base-content/70 mt-4">
          I'm a passionate developer with a love for creating innovative solutions
          and beautiful user experiences. I specialize in modern web technologies
          and enjoy turning complex problems into simple, elegant solutions.
        </p>

        {/* BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex flex-col sm:flex-row gap-4"
        >
          <a href="#showcase" className="btn btn-primary rounded-none">
            View Projects <FaCode />
          </a>
          <a
             href="/resume.pdf"
            download="Abinesh_Resume.pdf"
            rel="noopener noreferrer"
            className="btn btn-outline rounded-none"
          >
            Download CV <PiReadCvLogoBold />
          </a>
        </motion.div>
      </div>
    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: index * 0.2 }}
          className="
            card backdrop-blur-md
            bg-white/20 dark:bg-white/10
            shadow-xl rounded-none
            hover:shadow-2xl transition-all
            border border-white/30
          "
        >
          <div className="card-body text-center">
            <div className="flex justify-between w-full">
              <div className="text-4xl">{card.icon}</div>
              <div className="text-xl font-bold text-primary">
                {card.num}
              </div>
            </div>

            <div className="mt-4 text-left">
              <h3 className="text-2xl font-semibold">{card.title}</h3>
              <p className="text-base-content/70 mt-2">
                {card.content}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

  )
}

export default About
