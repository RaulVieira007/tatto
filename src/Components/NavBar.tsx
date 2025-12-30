import { useState } from "react"

function NavBar() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setOpen(false)
    }
  }

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Estilos", id: "estilos" },
    { name: "Sobre", id: "sobre" },
    { name: "Localização", id: "studio" },
    { name: "Contato", id: "contato" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <h1
            onClick={() => scrollToSection("home")}
            className="text-lg md:text-xl font-bold tracking-widest text-white cursor-pointer"
          >
            gidalzo_tattoo
          </h1>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex gap-8 text-xs md:text-sm uppercase tracking-wider">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                  relative cursor-pointer text-gray-400
                  transition-all duration-300
                  hover:text-orange-500 hover:tracking-widest
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[2px] after:bg-orange-500
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>

        </div>
      </nav>

      {/* MENU MOBILE FULLSCREEN */}
      {open && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8">

          {/* FECHAR */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                text-2xl uppercase tracking-widest text-gray-300
                transition-all duration-300
                hover:text-orange-500 hover:scale-110
              "
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

export default NavBar
