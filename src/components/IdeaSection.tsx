
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {ChevronLeft, ChevronRight, Star, Scissors} from 'lucide-react'
import americano from '../img/cortes/americano.jpg'
import fade from '../img/cortes/fade.jpg'
import mullet from '../img/cortes/mullet.jpg'
import social from '../img/cortes/social.jpg'
import undercut from '../img/cortes/undercut.jpg'
import buzz from '../img/cortes/buzz.jpg'

interface HairstyleIdea {
  id: string
  name: string
  description: string
  image: string
  popularity: number
  tags: string[]
}

const IdeaSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const hairstyleIdeas: HairstyleIdea[] = [
    {
      id: '1',
      name: 'Americano',
      description: 'Corte clássico americano com laterais curtas e topo volumoso. Perfeito para um visual elegante e profissional.',
      image: americano,
      popularity: 95,
      tags: ['Clássico', 'Profissional', 'Elegante']
    },
    {
      id: '2',
      name: 'Fade',
      description: 'Degradê moderno que vai do curto ao longo gradualmente. Versátil e sempre na moda.',
      image: fade,
      popularity: 98,
      tags: ['Moderno', 'Degradê', 'Versátil']
    },
    {
      id: '3',
      name: 'Mullet',
      description: 'Estilo retrô que voltou com força. Curto na frente e nas laterais, longo atrás.',
      image: mullet,
      popularity: 85,
      tags: ['Retrô', 'Ousado', 'Moderno']
    },
    {
      id: '4',
      name: 'Social',
      description: 'Clássico com volume no topo e laterais bem aparadas. Estilo vintage sofisticado.',
      image: social,
      popularity: 88,
      tags: ['Vintage', 'Sofisticado', 'Volume']
    },
    {
      id: '5',
      name: 'Undercut',
      description: 'Laterais e nuca raspadas com topo longo. Contraste marcante e visual impactante.',
      image: undercut,
      popularity: 92,
      tags: ['Contraste', 'Impactante', 'Moderno']
    },
    {
      id: '6',
      name: 'Buzz Cut',
      description: 'Corte militar bem curto e uniforme. Prático, masculino e fácil de manter.',
      image: buzz,
      popularity: 80,
      tags: ['Militar', 'Prático', 'Masculino']
    }
  ]

  const nextIdea = () => {
    setCurrentIndex((prev) => (prev + 1) % hairstyleIdeas.length)
  }

  const prevIdea = () => {
    setCurrentIndex((prev) => (prev - 1 + hairstyleIdeas.length) % hairstyleIdeas.length)
  }

  const currentIdea = hairstyleIdeas[currentIndex]

  return (
    <section id="ideias" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <Scissors className="inline-block mr-3 text-red-500" size={40} />
            Nossas <span className="text-red-500">Ideias</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Inspire-se com os estilos mais populares e encontre o corte perfeito para você
          </p>
        </motion.div>

        {/* Featured Idea */}
        <div className="relative mb-16">
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="w-auto h-[450px] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIdea.id}
                    src={currentIdea.image}
                    alt={currentIdea.name}
                    className="w-full h-auto object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                
                {/* Popularity Badge */}
                <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg flex items-center gap-2">
                  <Star size={16} fill="currentColor" />
                  {currentIdea.popularity}%
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIdea.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">
                      {currentIdea.name}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {currentIdea.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentIdea.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Popularity */}
                    <div className="flex items-center gap-1 text-gray-600">
                      <Star size={16} fill="currentColor" className="text-red-500" />
                      <span className="font-medium">{currentIdea.popularity}% Popular</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevIdea}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextIdea}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Ideas Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {hairstyleIdeas.map((idea, index) => (
            <motion.div
              key={idea.id}
              className={`bg-white/10 backdrop-blur-sm p-4 rounded-xl cursor-pointer transition-all duration-200 hover:bg-white/20 hover:scale-105 ${
                index === currentIndex ? 'ring-2 ring-red-500 bg-white/20' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                  <img 
                    src={idea.image} 
                    alt={idea.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-white mb-1 text-sm">{idea.name}</h4>
                <div className="flex items-center justify-center gap-1">
                  <Star size={12} fill="currentColor" className="text-red-500" />
                  <span className="text-red-500 text-xs font-medium">{idea.popularity}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2">
          {hairstyleIdeas.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-red-500 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default IdeaSection
