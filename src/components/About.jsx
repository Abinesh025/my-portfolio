import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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
      title: 'Experience',
      content: '5+ years of experience in web development',
      icon: '💼',
    },
    {
      title: 'Skills',
      content: 'Full-stack development with modern frameworks',
      icon: '⚡',
    },
    {
      title: 'Passion',
      content: 'Building scalable and user-friendly applications',
      icon: '🚀',
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-white/20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            I'm a passionate developer with a love for creating innovative solutions
            and beautiful user experiences. I specialize in modern web technologies
            and enjoy turning complex problems into simple, elegant solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: index * 0.2 }}
              className="card backdrop-blur-md bg-white/20 dark:bg-white/10 shadow-xl hover:shadow-2xl transition-all border border-white/30"
            >
              <div className="card-body text-center">
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="card-title justify-center text-2xl mb-2">
                  {card.title}
                </h3>
                <p className="text-base-content/70">{card.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
