import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const Navbar = () => {
  const location = useLocation()
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMenuOpen(false)

    if (location.pathname !== '/') {
      window.location.href = '/'
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { path: '/', label: 'Home', isRoute: true },
    { path: '#about', label: 'About Me', targetId: 'about' },
    { path: '#showcase', label: 'Showcase', targetId: 'showcase' },
    { path: '#contact', label: 'Contact', targetId: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 z-50 w-full bg-base-200/80 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="text-xl font-bold">
            Portfolio
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.isRoute ? (
                  <Link to={item.path} className="hover:text-primary">
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.targetId)}
                    className="hover:text-primary cursor-pointer"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            {/* THEME TOGGLE */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                checked={theme === 'light'}
                onChange={toggleTheme}
              />
              <svg className="swap-off w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" />
              </svg>
              <svg className="swap-on w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M21.64 13A8 8 0 1111 2a7 7 0 0010.64 11z" />
              </svg>
            </label>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden flex flex-col gap-4 py-6"
          >
            {navItems.map((item) => (
              <li key={item.label}>
                {item.isRoute ? (
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.targetId)}
                    className="block py-2"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
