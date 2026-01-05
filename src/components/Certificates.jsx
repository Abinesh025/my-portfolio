import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const certificates = [
    {
      issuer: 'AWS',
      title: 'AWS Certified Solutions Architect',
      year: '2023',
    },
    {
      issuer: 'Google',
      title: 'Google Cloud Professional Developer',
      year: '2023',
    },
    {
      issuer: 'Meta',
      title: 'Meta Front-End Developer Certificate',
      year: '2022',
    },
    {
      issuer: 'Microsoft',
      title: 'Microsoft Azure Fundamentals',
      year: '2022',
    },
    {
      issuer: 'FreeCodeCamp',
      title: 'Full Stack Web Development',
      year: '2021',
    },
    {
      issuer: 'Coursera',
      title: 'React Specialization',
      year: '2021',
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
              <h3 className="card-title text-xl">{cert.issuer}</h3>
              <span className="badge badge-secondary">{cert.year}</span>
            </div>
            <p className="text-base-content/80">{cert.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Certificates
