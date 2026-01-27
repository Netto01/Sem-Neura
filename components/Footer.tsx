import React from 'react';
import { Instagram, Mail, Brain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-petrol-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-petrol-800 pb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <Brain size={28} />
              <span className="text-2xl font-bold">Sem Neura</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Descomplicando a psicologia para você viver uma vida mais leve, produtiva e autêntica. Sua saúde mental importa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-petrol-800 rounded-lg hover:bg-softYellow-400 hover:text-petrol-900 transition-all">
                <Instagram size={20} />
              </a>
              <a href="mailto:contato@semneura.com.br" className="p-2 bg-petrol-800 rounded-lg hover:bg-softYellow-400 hover:text-petrol-900 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="hover:text-softYellow-200 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-softYellow-200 transition-colors">Sobre</a></li>
              <li><a href="#conteudos" className="hover:text-softYellow-200 transition-colors">Conteúdos</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-softYellow-200 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-softYellow-200 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-softYellow-200 transition-colors">Aviso Legal</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sem Neura. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <span className="text-red-400">♥</span> para mentes inquietas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;