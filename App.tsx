import React, { useState, useEffect } from 'react';
import { 
  Brain, Menu, X, ArrowRight, Sparkles, Quote, 
  Sun, BatteryCharging, Compass, ArrowUpRight, 
  Instagram, Mail, Send, MapPin, Phone
} from 'lucide-react';

// --- Header Component ---
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Conteúdos', href: '#conteudos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-petrol-800 rounded-lg text-white transform group-hover:rotate-12 transition-transform duration-300">
            <Brain size={24} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-petrol-900 tracking-tight">
            Sem Neura
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-600 hover:text-petrol-800 font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-softYellow-400 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#conteudos"
            className="px-5 py-2 bg-petrol-800 text-white rounded-full font-medium hover:bg-petrol-900 transition-colors shadow-lg shadow-petrol-800/20 text-sm"
          >
            Começar Agora
          </a>
        </nav>

        <button 
          className="md:hidden text-petrol-800 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-700 hover:text-petrol-800 py-2 border-b border-gray-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

// --- Hero Component ---
const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-pastel-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-softYellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-petrol-800 mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
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
            <a href="#conteudos" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-petrol-800 hover:bg-petrol-900 text-white font-bold rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-petrol-800/25">
              Quero me conhecer melhor
              <ArrowRight size={20} />
            </a>
            <a href="#sobre" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-petrol-800 border border-slate-200 font-bold rounded-full text-lg transition-all">
              Saiba mais
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200/60 w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-4">
              Junte-se à comunidade Sem Neura
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="text-xl font-bold text-slate-300 flex items-center gap-2 group cursor-default">
                 <div className="w-2 h-2 bg-petrol-800 rounded-full group-hover:scale-150 transition-transform"></div> + Leveza
               </div>
               <div className="text-xl font-bold text-slate-300 flex items-center gap-2 group cursor-default">
                 <div className="w-2 h-2 bg-softYellow-400 rounded-full group-hover:scale-150 transition-transform"></div> + Foco
               </div>
               <div className="text-xl font-bold text-slate-300 flex items-center gap-2 group cursor-default">
                 <div className="w-2 h-2 bg-slate-400 rounded-full group-hover:scale-150 transition-transform"></div> - Ansiedade
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- About Component ---
const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute top-4 -left-4 w-full h-full bg-softYellow-200 rounded-full transition-transform group-hover:rotate-6"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Psicóloga do Sem Neura" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute bottom-4 -right-4 bg-petrol-800 text-white p-4 rounded-2xl shadow-lg max-w-[150px] animate-bounce-slow">
                <p className="text-xs font-bold leading-tight">Psicologia baseada em evidências</p>
              </div>
            </div>
          </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Features Component ---
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
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-start relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-softYellow-400 to-petrol-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className={`p-4 rounded-2xl ${feature.bg} mb-6 transition-colors group-hover:bg-petrol-800 group-hover:text-white`}>
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

// --- Contact Section (New) ---
const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <span className="text-petrol-800 font-semibold tracking-wider uppercase text-sm">Fale Conosco</span>
            <h2 className="text-3xl md:text-4xl font-bold text-petrol-900 mt-2 mb-6">
              Vamos conversar?
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Tem alguma dúvida sobre os conteúdos ou quer saber mais sobre atendimentos? Mande uma mensagem, vamos adorar te ouvir.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-700">
                <div className="p-3 bg-pastel-blue rounded-full text-petrol-800">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <p className="font-semibold">contato@semneura.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-700">
                <div className="p-3 bg-pastel-green rounded-full text-petrol-800">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Instagram</p>
                  <p className="font-semibold">@sem.neura</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-petrol-800 focus:ring-1 focus:ring-petrol-800 outline-none transition-all" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-petrol-800 focus:ring-1 focus:ring-petrol-800 outline-none transition-all" placeholder="seu@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-petrol-800 focus:ring-1 focus:ring-petrol-800 outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button type="submit" className="w-full bg-petrol-800 hover:bg-petrol-900 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer: React.FC = () => {
  return (
    <footer className="bg-petrol-900 text-slate-300 py-12 border-t border-petrol-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-white">
            <Brain size={24} />
            <span className="text-xl font-bold">Sem Neura</span>
          </div>
          
          <div className="flex gap-6">
             <a href="#" className="hover:text-softYellow-200 transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-softYellow-200 transition-colors">Política de Privacidade</a>
          </div>

          <p className="flex items-center gap-1 opacity-70">
            &copy; {new Date().getFullYear()}. Feito com <span className="text-red-400">♥</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-softYellow-200 selection:text-petrol-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;