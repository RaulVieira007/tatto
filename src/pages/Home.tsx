function Home() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        w-full
        flex items-center justify-center
        text-center
        px-4
        relative
      "
      style={{
        backgroundImage: "url('/Untitled design.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Arte que conta histórias na sua pele
        </h1>

        <h2 className="text-lg md:text-2xl text-gray-300">
          Tatuagens autorais com inspiração oriental, realismo e identidade única.
        </h2>
      </div>
    </section>
  )
}

export default Home
