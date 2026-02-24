import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import js from "../assets/js.png"
import react from "../assets/react.png"
import node from "../assets/Node.js.webp"
import express from "../assets/Express.webp"
import mongodb from "../assets/MongoDB.webp"
import mongoose from "../assets/Mongoose.js.webp"
import tailwind from "../assets/Tailwind CSS.webp"
import vite from "../assets/Vite.js.webp"
import git from "../assets/Git.webp"
import github from "../assets/GitHub.webp"
import postman from "../assets/Postman.webp"
import vs from "../assets/Visual Studio Code (VS Code).webp"
import prebuild from "../assets/prebuild.png"
import sql from "../assets/sql.png"
import n8n from "../assets/n8n.png"
const TechStack = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const categories = [
      { name: 'JavaScript', icon: js },
      { name: 'React.js', icon: react },
      { name: 'Node.js', icon: node},
      { name: 'Express.js', icon: express },
      { name: 'MongoDB', icon: mongodb },
 
      { name: 'Mongoose', icon: mongoose },
      { name: 'Tailwind CSS', icon: tailwind },
      { name: 'Vite.js', icon: vite },
      { name: 'Git', icon: git },
      { name: 'GitHub', icon: github },
 
      { name: 'PostMan', icon: postman },
      { name: 'VS Code', icon: vs },
      { name: 'Prebuilt UI', icon: prebuild},
      { name: 'n8n', icon: n8n},
      { name: 'sql', icon: sql}
    ]
  

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
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.2, // controls one-by-one effect
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};



  return (
    <div ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="space-y-12"
      >
        {/* {Object.entries(categories).map(([category, skills]) => ( */}
          <motion.div  variants={itemVariants}>
            {/* <h3 className="text-2xl font-bold mb-6 text-center">{category}</h3> */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((skill, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  custom={index}
                  className="card backdrop-blur-md bg-white/20 dark:bg-white/10 w-32 h-32 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-white/30"
                >
                  <div className="card-body items-center justify-center text-center">
                    <img src={skill.icon} alt="react" className='w-[40px]'/>
                    <h4 className="font-semibold text-sm">{skill.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        {/* ))} */}
      </motion.div>
    </div>
  )
}

export default TechStack
