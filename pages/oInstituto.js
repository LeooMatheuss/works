import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>O Instituto</title>
        <meta name="description" content="Página de Sobre o Instituto EDMA" />
      </Head>

      {/* Seção Sobre o Instituto */}
      <section
        style={{ backgroundColor: "#023F36" }}
        className="text-white py-20"
      >
        <div className="container mx-auto px-6 flex items-center">
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-8 text-center">
              Sobre o Instituto EDMA
            </h1>
            <p className="text-lg max-w-3xl mb-6 text-center">
              O Instituto EDMA nasceu de uma jornada pessoal profundamente
              transformadora. Desde cedo, acompanhei de perto a luta da minha
              tia Edma contra a esquizofrenia. Crescer ao lado dela foi um
              aprendizado constante, que me mostrou os desafios diários de quem
              vive com transtornos psiquiátricos, mas também a beleza do amor,
              da resiliência e da empatia.
            </p>
            <p className="text-lg max-w-3xl mb-6 text-center">
              Apesar de todas as adversidades, Edma irradia uma sensibilidade e
              força que inspiram. Sua história me ensinou a importância do
              cuidado humanizado, do apoio familiar e da busca incessante por
              tratamentos que realmente fizessem a diferença. Mas também me
              revelou uma dura realidade: as limitações que ainda existem no
              campo da saúde mental, especialmente no acesso a terapias eficazes
              e inclusivas.
            </p>
            <p className="text-lg max-w-3xl mb-6 text-center">
              Essa convivência despertou uma inquietação que mudou completamente
              o rumo da minha vida: como eu poderia, como profissional de saúde,
              transformar a realidade de pessoas como ela? Foi essa pergunta que
              me levou a escolher a Biomedicina como caminho, onde descobri o
              poder transformador da ciência de romper barreiras e criar novas
              possibilidades. Decidi me tornar neurocientista para explorar
              soluções inovadoras, mergulhando no estudo das terapias
              canabinoides e no potencial dessas abordagens para oferecer
              esperança e qualidade de vida.
            </p>
            <p className="text-lg max-w-3xl mb-6 text-center">
              Dar o nome Edma ao instituto é a minha forma de honrar a mulher
              que foi minha maior inspiração. Além de representar o acrônimo
              “Educação, Descoberta e Medicina Avançada”, o nome carrega um
              simbolismo profundo de sua origem germânica: “protetora dos bens”
              ou “guardião da riqueza.” Esses valores refletem o que Edma sempre
              foi em minha vida: uma guardiã do que há de mais precioso — o
              amor, a força e a conexão humana.
            </p>
            <p className="text-lg max-w-3xl mb-6 text-center">
              O Instituto EDMA é, portanto, mais do que um centro de educação e
              pesquisa. É um espaço que celebra histórias como a dela,
              oferecendo inovação, ciência e acolhimento para aqueles que
              enfrentam condições muitas vezes envoltas em estigmas e barreiras.
              Meu compromisso é transformar essa história de dor e superação em
              um legado de cuidado, esperança e transformação para tantas outras
              famílias e indivíduos.
            </p>
          </div>
          <div className="relative inline-block">
            {" "}
            <img
              src="./img/brunna_Sobre.png"
              alt="Instituto EDMA"
              className="rounded-lg shadow-lg"
              style={{ width: "600px", height: "600px" }}
            />{" "}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-lg">
              {" "}
              <strong>A Inspiração por Trás do Instituto - Brunna Varela fundadora em 2024.</strong>{" "}
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section
        style={{ backgroundColor: "#035B4E" }}
        className="text-white py-16"
      >
        <div className="container mx-auto px-6 flex justify-between">
          {/* Texto à Esquerda */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center mb-8 md:mb-0 mt-22">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Fale Conosco
            </h2>
            <p className="text-lg text-center">
              Se você tem alguma dúvida ou deseja mais informações sobre nossos
              serviços, preencha o formulário ao lado e nossa equipe entrará em
              contato com você em breve. Estamos aqui para ajudar e esclarecer
              todas as suas questões.
            </p>
          </div>

          {/* Formulário à Direita */}
          <div className="w-full md:w-1/2">
            <form className="w-full p-8 rounded-lg shadow-lg space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                Entre em Contato
              </h2>

              <div>
                <label htmlFor="name" className="block text-lg">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 mt-2 bg-white text-gray-600 rounded-lg"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 mt-2 bg-white text-gray-600 rounded-lg"
                  placeholder="Seu email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 mt-2 bg-white text-gray-600 rounded-lg"
                  rows="4"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg mt-4"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
