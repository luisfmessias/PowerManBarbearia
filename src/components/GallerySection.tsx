
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import img7 from '../img/7.jpg'
import img8 from '../img/8.jpg'

const GallerySection: React.FC = () => {
  const [currentSet, setCurrentSet] = useState(0)
  const photoSets = [
    {
      id: 0,
      photos: [
        {
          url: img1,
          alt: "Corte masculino"
        },
        {
          url: img2,
          alt: "Corte masculino"
        },
        {
          url: img3,
          alt: "Corte masculino"
        },
        {
          url: img4,
          alt: "Corte masculino"
        }
      ]
    },
    {
      id: 1,
      photos: [
        {
          url: img5,
          alt: "Corte masculino"
        },
        {
          url: img6,
          alt: "Corte masculino e Barba"
        },
        {
          url: img7,
          alt: "Corte masculino"
        },
        {
          url: img8,
          alt: "Corte masculino"
        }
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % photoSets.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [photoSets.length])

  const currentPhotos = photoSets[currentSet].photos

  return (
    <section id="galeria" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossa <span className="text-red-500">Galeria</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Confira alguns dos nossos melhores trabalhos e se inspire para seu próximo visual
          </p>
        </motion.div>

        {/* Photo Grid */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
  <AnimatePresence mode="wait">
    {currentPhotos.map((photo, index) => (
      <motion.div
        key={`${currentSet}-${index}`}
        className="relative overflow-hidden rounded-xl shadow-xl"
        initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ scale: 1.05, zIndex: 10 }}
      >
        <div className="relative h-44 lg:h-72">
          <img
            src={photo.url}
            alt={photo.alt}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white font-medium text-center px-4">
              {photo.alt}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</div>

        <div className="flex justify-center mt-12 space-x-3">
          {photoSets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSet(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSet 
                  ? 'bg-red-400 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-white">
            <div className="text-4xl font-bold text-red-400 mb-2">1000+</div>
            <div className="text-lg">Clientes Satisfeitos</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold text-red-400 mb-2">5+</div>
            <div className="text-lg">Anos de Experiência</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold text-red-400 mb-2">3</div>
            <div className="text-lg">Barbeiros Especialistas</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GallerySection
