
import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      details: "(44) 99724-2373",
      subtitle: "Ligue para agendar"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: "barbeariapowermanmga@gmail.com",
      subtitle: "Envie sua mensagem"
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: "Av. Pedro Taques, 1013",
      subtitle: "Maringá - PR, 87030-000"
    },
    {
      icon: Clock,
      title: "Funcionamento",
      details: "Seg-Sex: 9h às 19h",
      subtitle: "Sáb: 9h às 18h | Dom: Fechado"
    }
  ]

  const workingHours = [
    { day: "Segunda-feira", hours: "09:00 - 19:00" },
    { day: "Terça-feira", hours: "09:00 - 19:00" },
    { day: "Quarta-feira", hours: "09:00 - 19:00" },
    { day: "Quinta-feira", hours: "09:00 - 19:00" },
    { day: "Sexta-feira", hours: "09:00 - 19:00" },
    { day: "Sábado", hours: "09:00 - 18:00" },
    { day: "Domingo", hours: "Fechado" }
  ]

  return (
    <section id="contato" className="py-20 bg-gray-50">
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
            Entre em <span className="text-red-500">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atendê-lo e criar o visual perfeito para você
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Informações de Contato
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-[#d83a34] p-3 rounded-lg">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-lg text-gray-800 font-medium">{item.details}</p>
                    <p className="text-gray-600 text-sm">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900 mb-4">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/barbeariapowerman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Instagram size={20} />
                  Instagram
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Horários de Funcionamento
            </h3>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    className={`flex justify-between items-center py-3 px-4 rounded-lg ${schedule.hours === "Fechado"
                      ? "bg-[#d83a34] text-white"
                      : "bg-gray-50 hover:bg-[#cf1b14]-50 transition-colors"
                      }`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span className={`font-semibold ${schedule.hours === "Fechado" ? "text-white" : "text-gray-900"
                      }`}>
                      {schedule.hours}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Special Notice */}
              <motion.div
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-red-800 text-sm">
                  <strong>Importante:</strong> Recomendamos agendamento prévio para garantir
                  seu horário. Clientes com agendamento têm prioridade.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                className="w-full mt-6 bg-red-500 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-red-300 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Agendar Agora
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
