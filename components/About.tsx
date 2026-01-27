import React from 'react';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              {/* Decorative circle behind */}
              <div className="absolute top-4 -left-4 w-full h-full bg-softYellow-200 rounded-full"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                {/* Using a placeholder image that fits the "modern/clean" vibe */}
                <img 
                  src="https://picsum.photos/400/400?grayscale" 
                  alt="Fundador do Sem Neura" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 -right-4 bg-petrol-800 text-white p-4 rounded-2xl shadow-lg max-w-[150px]">
                <p className="text-xs font-bold leading-tight">Psicologia baseada em evidências</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-petrol-900 mb-6">
              Sobre o Projeto
            </h2>
            
            <div className="relative">
               <Quote className="absolute -top-6 -left-6 text-softYellow-200 opacity-50 transform -scale-x-100" size={60} />
               <p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed italic relative z-10">
                 "Menos neura, mais ação. Ferramentas práticas para dominar o estresse e fortalecer sua saúde mental."
               </p>
            </div>

            <p className="mt-8 text-slate-600 leading-relaxed text-lg">
              O <span className="font-semibold text-petrol-800">Sem Neura</span> nasceu da necessidade de traduzir conceitos complexos da psicologia para o dia a dia. Acreditamos que o autoconhecimento não precisa ser um processo doloroso ou solitário. 
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed text-lg">
              Aqui, unimos ciência e empatia para ajudar você a construir uma rotina que funcione para a <em>sua</em> realidade, respeitando seus limites e potencializando suas qualidades.
            </p>

            <div className="mt-10">
              <a href="#contato" className="text-petrol-800 font-bold border-b-2 border-softYellow-400 hover:bg-softYellow-100 transition-colors pb-1">
                Conheça minha metodologia
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;