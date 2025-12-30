import { Instagram, Mail, MessageCircle } from "lucide-react"

function Contato() {
  return (
    <section
      id="contato"
      className="py-20 sm:py-24 md:py-28 px-4 bg-black text-white"
    >

      {/* TÍTULO */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          Entre em Contato
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Escolha a forma mais conveniente para você. Estou pronto para
          transformar sua ideia em arte.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

        {/* CANAIS DIRETOS */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
            Canais Diretos
          </h3>

          <div className="flex flex-col gap-4">

            <a
              href="https://instagram.com/gidalzo_tattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-neutral-900 border border-neutral-800
                rounded-xl p-4 sm:p-5
                flex items-center gap-4
                hover:border-orange-500
                transition
              "
            >
              <Instagram className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">@gidalzo_tattoo</span>
            </a>

            <a
              href="https://wa.me/5511916609527"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-neutral-900 border border-neutral-800
                rounded-xl p-4 sm:p-5
                flex items-center gap-4
                hover:border-orange-500
                transition
              "
            >
              <MessageCircle className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">
                WhatsApp: (11) 91660-9527
              </span>
            </a>

            <a
              href="mailto:contato@gidalzotattoo.com"
              className="
                bg-neutral-900 border border-neutral-800
                rounded-xl p-4 sm:p-5
                flex items-center gap-4
                hover:border-orange-500
                transition
              "
            >
              <Mail className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">
                lopesgidalzo@gmail.com
              </span>
            </a>

          </div>
        </div>

        {/* CTA WHATSAPP */}
        <div
          className="
            bg-neutral-900 border border-neutral-800
            rounded-2xl p-8 sm:p-10
            flex flex-col justify-center items-center
            text-center
          "
        >
          <MessageCircle className="text-orange-500 w-12 h-12 sm:w-14 sm:h-14 mb-6" />

          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            Orçamento e Agendamentos
          </h3>

          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-sm">
            Clique no botão abaixo e fale diretamente comigo pelo WhatsApp.
            Responderei o mais rápido possível.
          </p>

          <a
            href="https://wa.me/5511916609527?text=Olá! Gostaria de um orçamento para uma tatuagem."
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-orange-500 hover:bg-orange-600
              text-black font-semibold
              px-8 sm:px-10 py-3 sm:py-4
              rounded-full
              flex items-center gap-3
              transition
              active:scale-95
            "
          >
            <MessageCircle />
            Chamar no WhatsApp
          </a>

          <p className="text-xs text-gray-500 mt-4">
            Atendimento com horário marcado
          </p>
        </div>

      </div>
    </section>
  )
}

export default Contato
