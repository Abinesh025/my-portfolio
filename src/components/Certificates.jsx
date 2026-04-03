import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import alpha from "../assets/certifications/code alpha.jpg"
import Cloud from "../assets/certifications/Cloud Computing Nptel.jpg"
import  Wireless from "../assets/certifications/Wireless Standard Design Nptel.jpg"
import Business from "../assets/certifications/E-Business Nptel.jpg"
import ibm from "../assets/certifications/Ibm.jpg"
import large from "../assets/certifications/large.jpg"
import prompt from "../assets/certifications/propmting.jpg"
import skill from "../assets/certifications/skill.jpg"
import tcs from "../assets/certifications/tcs.jpg"
import quiz from "../assets/certifications/Abinesh.jpg"
import nptel from "../assets/certifications/nptel.jpeg";
import iot from "../assets/certifications/iot.jpeg";
import periyar from "../assets/certifications/periyar.jpg.jpeg";

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const certificates = [
    {
      photo:alpha,
    },
    {
       photo:Cloud,
    },
    {
       photo:Wireless,
    },
    {
       photo:Business,
    },
    {
       photo:ibm,
    },
    {
       photo:large,
    },
    {
       photo:prompt,
    },
    {
       photo:skill,
    },
    {
       photo:tcs
    },
    {
       photo:quiz
    },
    {
      photo:nptel
    },
    {
      photo:iot
    },
    {
      photo:periyar
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((cert, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="
            overflow-hidden
            rounded-xl
            shadow-xl
            hover:shadow-2xl
            transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]
            border border-white/20
            bg-white/5 dark:bg-white/5
            backdrop-blur-sm
            group
            cursor-pointer
          "
        >
          <div className="w-full h-[240px] sm:h-[260px] md:h-[280px] flex items-center justify-center bg-white/5 p-3">
            <img
              src={cert.photo}
              alt="Certificate"
              className="max-w-full max-h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Certificates
