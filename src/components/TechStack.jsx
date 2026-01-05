import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const TechStack = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const categories = {
    Frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'Vue.js', icon: '🟢' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Next.js', icon: '▲' },
    ],
    Backend: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'Express', icon: '🚂' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
    ],
    Tools: [
      { name: 'Git', icon: '📦' },
      { name: 'Docker', icon: '🐳' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'VS Code', icon: '💻' },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="space-y-12"
      >
        {Object.entries(categories).map(([category, skills]) => (
          <motion.div key={category} variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-center">{category}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card backdrop-blur-md bg-white/20 dark:bg-white/10 w-32 h-32 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-white/30"
                >
                  <div className="card-body items-center justify-center text-center">
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <h4 className="font-semibold text-sm">{skill.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default TechStack
