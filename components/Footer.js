import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: '#3B4134' }}
      className="text-white font-sans py-8 px-4"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center">

        {/* Lado Esquerdo: Logo e Descrição */}
        <div className="flex flex-col items-start mb-8 lg:mb-0">
          <div className="flex items-center mb-4">
            <img src="/img/logo.png" alt="Logo Instituto EDMA" className="h-12 w-12 mr-3 object-contain rounded-full" />
            <h1 className="text-2xl font-bold">Instituto EDMA</h1>
          </div>
          <p className="text-sm max-w-xs">
            O Instituto EDMA tem como missão promover a educação e o desenvolvimento sustentável em diversas áreas do conhecimento.
          </p>
        </div>

        {/* Links de Navegação Centralizados */}
        <div className="flex flex-col items-center space-y-4 mb-8 lg:mb-0">
          <a href="#" className="text-lg hover:text-gray-300">Home</a>
          <a href="#sobre" className="text-lg hover:text-gray-300">Sobre</a>
          <a href="#cursos" className="text-lg hover:text-gray-300">Cursos</a>
          <a href="#eventos" className="text-lg hover:text-gray-300">Eventos</a>
          <a href="#contato" className="text-lg hover:text-gray-300">Contato</a>
        </div>

        {/* Ícones das Redes Sociais à Direita */}
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-300">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-300">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{ backgroundColor: '#3B4134' }}
        className="text-center mt-8 py-4"
      >
        <p>&copy; {currentYear} Instituto EDMA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
