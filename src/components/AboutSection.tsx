
import React from 'react'
import { motion } from 'framer-motion'
import {Award, Users, Star} from 'lucide-react'
import fachada from '../img/fachada.jpg'

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={fachada}
                alt="Interior da Barbearia POWER MAN"
                className="w-full h-100 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-[#d83a34] text-black p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-50">5+</div>
                <div className="text-sm font-medium text-gray-50">Anos de Experiência</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nossa <span className="text-red-500">História</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Fundada com a paixão pela arte da barbearia tradicional, a POWER MAN nasceu 
              do sonho de oferecer uma experiência única e personalizada para cada cliente. 
              Combinamos técnicas clássicas com tendências modernas, sempre priorizando a 
              qualidade e o atendimento excepcional.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa equipe é formada por profissionais apaixonados e experientes, que 
              transformam cada visita em um momento especial. Acreditamos que um bom 
              corte vai além da técnica - é sobre confiança, estilo e personalidade.
            </p>

            {/* Características */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#d83a34] p-2 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Profissionais Qualificados</h3>
                  <p className="text-gray-600 text-sm">
                    Barbeiros experientes com formação especializada.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#d83a34] p-2 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Produtos de Qualidade</h3>
                  <p className="text-gray-600 text-sm">
                    Utilizamos apenas produtos de melhor qualidade.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Avaliações */}
            <motion.div 
              className="mt-8 p-6 bg-[#d83a34] rounded-xl border bg-[#d83a34]-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-bg-[#d83a34]">
                  {[...Array(5)].map((_, i) => ( 
                    <Star key={i} size={20} fill="white" stroke="none" /> 
                  ))}
                </div>
                <span className="font-semibold text-gray-100">4.9/5</span>
              </div>
              <p className="text-gray-100 italic">
                "Mais de 1000 clientes satisfeitos confiam na qualidade e excelência 
                dos nossos serviços."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
