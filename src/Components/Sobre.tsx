function Sobre() {
  return (
    <section
      id="sobre"
      className="py-24 px-4 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* FOTO */}
        <div className="mb-8">
          <img
            src="https://i.pinimg.com/736x/60/01/6e/60016efa4c91563f47e091ea4d8a9df8.jpg"
            alt="Tatuador"
            className="
              w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52
              rounded-full
              object-cover
              border-4 border-orange-500
              shadow-lg
            "
          />
        </div>

        {/* NOME */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Gil
        </h2>

        {/* ESPECIALIZAÇÃO */}
        <h3 className="
          text-orange-500
          uppercase
          tracking-widest
          text-xs sm:text-sm
          mb-4
          max-w-3xl
        ">
          Tatuador especializado em realismo em preto e cinza, com foco em
          retratos e animais. Atua há quase uma década criando peças autorais
        </h3>

        {/* EXPERIÊNCIA */}
        <p className="text-gray-400 text-sm mb-6">
          10 anos de experiência
        </p>

        {/* DESCRIÇÃO */}
        <p className="max-w-2xl text-gray-300 leading-relaxed text-sm sm:text-base">
          {/* Escreva aqui a história do tatuador */}
        </p>

      </div>
    </section>
  )
}

export default Sobre
