import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* Background Geometric Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-pastel-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-softYellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-petrol-800 mb-8 shadow-sm">
            <Sparkles size={16} className="text-softYellow-400 fill-softYellow-400" />
            <span>Saúde mental sem complicações</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-petrol-900 leading-[1.1] mb-6 tracking-tight">
            Descomplique sua mente e <span className="relative inline-block">
              <span className="relative z-10">viva sem neura.</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-softYellow-200/80 -z-0 rotate-1"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Psicologia prática e acessível para transformar sua rotina, reduzir a ansiedade e trazer leveza para o seu dia a dia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-petrol-800 hover:bg-petrol-900 text-white font-bold rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-petrol-800/25">
              Quero me conhecer melhor
              <ArrowRight size={20} />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-petrol-800 border border-slate-200 font-bold rounded-full text-lg transition-all">
              Ver conteúdos
            </button>
          </div>

          {/* Social Proof / Trust Indicators (Optional placeholder) */}
          <div className="mt-16 pt-8 border-t border-slate-200/60 w-full max-w-2xl">
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-4">
              Junte-se à comunidade Sem Neura
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos or stats */}
               <div className="text-xl font-bold text-slate-300 flex items-center gap-2">
                 <div className="w-2 h-2 bg-petrol-800 rounded-full"></div> + Leveza
               </div>
               <div className="text-xl font-bold text-slate-300 flex items-center gap-2">
                 <div className="w-2 h-2 bg-softYellow-400 rounded-full"></div> + Foco
               </div>
               <div className="text-xl font-bold text-slate-300 flex items-center gap-2">
                 <div className="w-2 h-2 bg-slate-400 rounded-full"></div> - Ansiedade
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;