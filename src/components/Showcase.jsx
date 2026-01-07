import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Projects from './Projects'
import Certificates from './Certificates'
import TechStack from './TechStack'

const Showcase = () => {
  const [activeTab, setActiveTab] = useState('projects')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'techstack', label: 'Tech Stack' },
  ]

  const tabVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="showcase" ref={ref} className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 p-8 mt-[-35px]"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Showcase</h2>
          <p className="text-lg text-base-content/70">
            Explore my work, achievements, and technical expertise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-between items-center mb-8"
        >
          <div className="tabs tabs-boxed w-full flex items-center justify-evenly gap-6 backdrop-blur-md bg-white/10 h-[50px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab tab-lg hover:bg-white/10 w-[40%] ${
                  activeTab === tab.id ? 'tab-active' : ''
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeTab === 'projects' && <Projects />}
            {activeTab === 'certificates' && <Certificates />}
            {activeTab === 'techstack' && <TechStack />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Showcase
