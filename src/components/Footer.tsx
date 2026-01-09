
import React from 'react'
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logo from '../img/logo.png'



const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="col-span-1 md:col-span-2">
            <Link to="/">
              <div className="logo-container perspective-1000 relative mb-7">
                <motion.img
                  src={logo}
                  alt="logo"
                  className="w-auto h-10 mr-10 drop-shadow-[0_0_20px_#a00303b7]"
                  animate={{ rotateY: [0, 180, 360], scale: [2.2] }} // escala a logo
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  style={{ transformStyle: 'preserve-3d' }}
                />
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              A melhor barbearia da região, oferecendo serviços de qualidade
              com profissionais experientes e produtos de primeira linha.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/barbeariapowerman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-red-400" />
                <span className="text-gray-300">(44) 99724-2373</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-red-400 mt-1" />
                <span className="text-gray-300">
                  Av. Pedro Taques, 1013<br />
                  Maringá - PR, 87030-000
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Funcionamento</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-red-400" />
                <div className="text-gray-300">
                  <div>Seg - Sex: 9h às 19h</div>
                  <div>Sábado: 9h às 18h</div>
                  <div>Domingo: Fechado</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 POWER MAN Barbearia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
