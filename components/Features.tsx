import React from 'react';
import { Sun, BatteryCharging, Compass, ArrowUpRight } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sun className="text-petrol-800" size={32} />,
      title: "Gestão da Ansiedade",
      description: "Aprenda técnicas práticas de regulação emocional para lidar com crises e preocupações excessivas no momento em que elas surgem.",
      bg: "bg-blue-50"
    },
    {
      icon: <BatteryCharging className="text-petrol-800" size={32} />,
      title: "Produtividade Saudável",
      description: "Chega de burnout. Descubra como realizar seus objetivos mantendo o equilíbrio entre trabalho, descanso e lazer.",
      bg: "bg-yellow-50"
    },
    {
      icon: <Compass className="text-petrol-800" size={32} />,
      title: "Autoconhecimento Prático",
      description: "Mergulhe em quem você é de verdade. Identifique padrões de comportamento e crenças que te limitam.",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section id="conteudos" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-petrol-800 font-semibold tracking-wider uppercase text-sm">O que oferecemos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-petrol-900 mt-2 mb-4">
            O que você vai encontrar
          </h2>
          <p className="text-slate-600">
            Pilares fundamentais para uma vida com mais propósito e menos tensão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-start relative overflow-hidden"
            >
              {/* Hover highlight bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-softYellow-400 to-petrol-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className={`p-4 rounded-2xl ${feature.bg} mb-6 transition-colors group-hover:bg-petrol-800 group-hover:text-white`}>
                {/* Clone element to change color on hover logic handling via CSS parent group */}
                <div className="group-hover:text-white transition-colors">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "text-petrol-800 group-hover:text-white transition-colors" })}
                </div>
              </div>

              <h3 className="text-xl font-bold text-petrol-900 mb-3 group-hover:text-petrol-800 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-petrol-800 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Saiba mais <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;