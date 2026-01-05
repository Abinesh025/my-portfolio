import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-2xl p-12 shadow-xl border border-white/20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Your Name
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-4xl text-base-content/80 mb-4"
          >
            Full Stack Developer
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto"
          >
            Crafting beautiful and functional web experiences with modern technologies
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8"
          >
            <a
              href="#about"
              className="btn btn-primary btn-lg mr-4"
            >
              Learn More
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
