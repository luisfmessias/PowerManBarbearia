import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Scissors } from 'lucide-react'

const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#servicos')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      
      {/* Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 mt-22"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="title bg-white bg-clip-text text-transparent">
              Power Man
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Barba, cabelo e outros serviços com atendimento de excelência.
            <br />
            <span className="text-red-500 font-medium">
              Sua melhor versão começa aqui.
            </span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Agendamento */}
            <a
              href="https://www.salao99.com.br/agendamento/power-man-barbearia/av-pedro-taques-1013-c-zona-7/9014/9b480aa0b6b4c1ce0d2062a67769f147"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <Calendar size={24} />
              Agende seu horário
            </a>

            {/* Serviços */}
            <button
              onClick={scrollToServices}
              className="srv group bg-transparent border border-red-500 text-red-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <Scissors size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              Nossos Serviços
            </button>
          </motion.div>

          {/* Features */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {/* Card 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="text-red-500" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Profissionais Qualificados
              </h3>
              <p className="text-gray-400">
                Barbeiros experientes, técnicas modernas e precisão em cada detalhe.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-red-500" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Qualidade Premium
              </h3>
              <p className="text-gray-400">
                Atendimento personalizado focado em conforto e excelência.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Produtos de Alta Qualidade
              </h3>
              <p className="text-gray-400">
                Produtos profissionais que cuidam da saúde do cabelo e da barba.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
