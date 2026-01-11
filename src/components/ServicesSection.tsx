import React, { useState } from 'react' // Removi o useEffect daqui
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Clock, DollarSign } from 'lucide-react'
import corteBarba from '../img/corte-barba.jpg'
import corteCabelo from '../img/corte-cabelo.jpg'
import pezinho from '../img/pezinho.jpg'
import corteSombrancelha from '../img/corte_sombrancelha.jpg'
import hidratacao from '../img/hidratação.jpg'
import desondulacao from '../img/desondulação.jpg'

interface Service {
  _id: string
  name: string
  price: number
  duration: number
  image: string
  description: string
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      _id: 'barba',
      name: 'Barba',
      price: 40,
      duration: 30,
      image: corteBarba,
      description: 'Corte e modelagem de barba com navalha e produtos premium. Inclui hidratação e finalização com óleos especiais.'
    },
    {
      _id: 'cabelo',
      name: 'Cabelo',
      price: 45,
      duration: 30,
      image: corteCabelo,
      description: 'Corte de cabelo masculino moderno com técnicas atuais. Inclui lavagem, corte e finalização profissional.'
    },
    {
      _id: 'pezinho',
      name: 'Pezinho',
      price: 15,
      duration: 10,
      image: pezinho,
      description: 'Acabamento e contorno do pezinho com máquina e navalha. Perfeito para finalizar o visual.'
    },
    {
      _id: 'sobrancelha',
      name: 'Sobrancelha',
      price: 15,
      duration: 15,
      image: corteSombrancelha,
      description: 'Modelagem e limpeza de sobrancelhas para um visual mais definido e harmonioso.'
    },
    {
      _id: 'hidratação',
      name: 'Hidratação',
      price: 20,
      duration: 10,
      image: hidratacao,
      description: 'Ajuda a tirar o aspecto de ressecamento , nutrindo , e recuperando brilho e maciez'
    },
    {
      _id: 'desondulação',
      name: 'Desondulação',
      price: 100,
      duration: 60,
      image: desondulacao,
      description: 'Alinhamento dos fios, redução de volume sem perde a naturalidade dos fios.'
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }


  const currentService = services[currentIndex]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-red-500">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços para atender às suas necessidades.
          </p>
        </motion.div>

        {/* carrosel */}
        <div className="relative">
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentService._id}
                    src={currentService.image}
                    alt={currentService.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>

                <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

                <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  R$ {currentService.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService._id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-7">{currentService.name}</h3>
                    <p className="text-gray-600 text-1xl mb-6 leading-relaxed">{currentService.description}</p>

                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                        <Clock className="text-red-500" size={20} />
                        <span className="font-medium text-1xl">{currentService.duration} min</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                        <DollarSign className="text-red-500" size={20} />
                        <span className="font-medium text-1xl">R$ {currentService.price}</span>
                      </div>
                    </div>

                    <a
                      href="https://www.salao99.com.br/agendamento/power-man-barbearia/av-pedro-taques-1013-c-zona-7/9014/9b480aa0b6b4c1ce0d2062a67769f147"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-transparent border border-red-500 text-red-500 px-4 py-4 rounded-full font-bold text-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      Agende seu horário
                    </a>

                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevService}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextService}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                  ? 'bg-red-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-500'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection