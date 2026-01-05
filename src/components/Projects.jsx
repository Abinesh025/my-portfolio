import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive charts.',
      tech: ['React', 'API Integration', 'Chart.js'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting.',
      tech: ['React', 'Python', 'PostgreSQL', 'D3.js'],
      liveLink: '#',
      githubLink: '#',
    },
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
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Projects
