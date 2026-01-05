import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    setStatus('success')
    setTimeout(() => {
      setStatus('')
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: '💼',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '💻',
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: '📧',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="contact" ref={ref} className="min-h-screen pt-20 pb-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-2xl p-8 shadow-xl border border-white/20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg text-base-content/70">
              Have a project in mind or want to collaborate? Let's talk!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-base-content/70 mb-6">
                  Feel free to reach out through any of these channels:
                </p>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-4 p-4 backdrop-blur-md bg-white/20 dark:bg-white/10 rounded-lg hover:bg-white/30 transition-colors border border-white/30"
                    >
                      <span className="text-3xl">{link.icon}</span>
                      <span className="text-lg font-semibold">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="card backdrop-blur-md bg-white/20 dark:bg-white/10 shadow-xl border border-white/30">
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-4">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Message</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        className="textarea textarea-bordered h-32"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                    </div>
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="alert alert-success mt-4"
                      >
                        <span>Message sent successfully!</span>
                      </motion.div>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
