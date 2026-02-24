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
    }
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
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((cert, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="card backdrop-blur-md bg-white/20 dark:bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/30"
        >
          <div className="card-body">
            <div className="flex items-center justify-between mb-2">
              <img src={cert.photo} alt='Certificate' className='w-full rounded' />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Certificates
