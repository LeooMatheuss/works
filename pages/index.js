import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section
        className="bg-cover bg-center text-white h-screen flex items-center justify-start"
        style={{ backgroundImage: "url('/img/doctor.jpg')" }}
      >
        <div className="text-left px-16 py-12 max-w-6xl ml-8">
          <p className="text-xl mb-4 text-white font-normal">Terapia Canabidiol</p>
          <h1 className="text-6xl font-bold leading-tight mb-6">
            <span className="text-green-300">A ciência é nossa raiz</span><br />
            <span className="text-white">e o cuidado nosso propósito</span>
          </h1>
          <p className="text-xl mb-8 text-white leading-relaxed">
            Cuidamos de você de uma forma única e especial!<br />
            Entre em contato agora.
          </p>
          <button className="px-8 py-4 bg-green-300 text-black text-lg font-medium rounded-full hover:bg-green-400 transition duration-300 shadow-lg">
            AGENDAR CONSULTA
          </button>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Transforme sua Vida</h2>
          <p className="text-lg text-gray-600 mb-6">Aqui no Instituto EDMA, trabalhamos com tratamentos inovadores para o seu bem-estar e saúde.</p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tratamentos Personalizados</h3>
              <p className="text-gray-600">Oferecemos planos de tratamentos exclusivos para as suas necessidades.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Profissionais Qualificados</h3>
              <p className="text-gray-600">Nossa equipe é composta por especialistas altamente capacitados.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Ambiente Aconchegante</h3>
              <p className="text-gray-600">Oferecemos um ambiente tranquilo e relaxante para o seu tratamento.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg mb-6">Gostou do nosso trabalho? Fale com um de nossos consultores agora mesmo.</p>
          <button className="px-8 py-4 bg-white text-green-600 font-semibold text-xl rounded-lg hover:bg-gray-100 transition duration-300">
            Fale Conosco
          </button>
        </div>
      </section>
    </>
  );
}
