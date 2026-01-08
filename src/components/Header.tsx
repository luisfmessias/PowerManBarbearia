import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId: string) => {
    // Se já estiver na home
    if (location.pathname === '/') {
      const element = document.querySelector(`#${sectionId}`)
      element?.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    } else {
      
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(`#${sectionId}`)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  const handleGoHome = () => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 300)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-red-300/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={handleGoHome} className="focus:outline-none">
              <div className="logo-container perspective-1000 relative">
                <motion.img
                  src="./src/img/logo.png"
                  alt="logo"
                  className="w-auto h-8 mr-8 drop-shadow-[0_0_20px_#a00303b7]"
                  animate={{ rotateY: [0, 180, 360], scale: [2.5] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  style={{ transformStyle: 'preserve-3d' }}
                />
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-red-400 transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-white hover:text-red-400 transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-white hover:text-red-400 transition-colors font-medium"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('ideias')}
                className="text-white hover:text-red-400 transition-colors font-medium"
              >
                Ideias
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-white hover:text-red-400 transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-white hover:text-red-400 transition-colors font-medium"
              >
                Contato
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-red-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block text-white hover:text-red-400 transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block text-white hover:text-red-400 transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="block text-white hover:text-red-400 transition-colors font-medium"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('ideias')}
                className="block text-white hover:text-red-400 transition-colors font-medium"
              >
                Ideias
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block text-white hover:text-red-400 transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block text-white hover:text-red-400 transition-colors font-medium"
              >
                Contato
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  )
}

export default Header
