
import React from 'react'
import { motion } from 'framer-motion'
import {MapPin, Navigation, Phone} from 'lucide-react'

const LocationSection: React.FC = () => {
  const address = "Av. Pedro Taques, 1013, Maringá – PR, 87030-000"
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Barbearia+Power+Man+1013+Maringá+Paraná+PR"
  
  return (
    <section id="local" className="py-20 bg-white">
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
            Nossa <span className="text-red-500">Localização</span>
          </h2>
          
          {/* Address */}
          <motion.div 
            className="flex items-center justify-center gap-3 text-lg font-medium text-gray-800"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MapPin className="text-red-500" size={24} />
            <span>{address}</span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-96 lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.455627430503!2d-51.92780602467449!3d-23.412600978902297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd1650534f6e9%3A0xc9ede41ddbcfe15d!2sBarbearia%20Power%20Man!5e1!3m2!1spt-BR!2sbr!4v1760999028467!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da POWER MAN Barbearia"
              />
              
              {/* Overlay with branding */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-gray-900">POWER MAN</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Open in Maps Button */}
            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-red-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-red-300 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Navigation size={24} />
              Abrir no Google Maps
            </motion.a>

            {/* Location Details */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Como Chegar</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-red-500 p-2 rounded-lg mt-1">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Endereço Completo</h4>
                    <p className="text-gray-600">{address}</p>
                    <p className="text-gray-600">CEP: 87030-000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-red-500 p-2 rounded-lg mt-1">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(44) 99724-2373</p>
                    <p className="text-gray-500 text-sm">WhatsApp disponível</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
