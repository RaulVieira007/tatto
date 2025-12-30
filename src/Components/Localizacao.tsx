import {
  MapPin,
  Clock,
  Store,
  Info
} from "lucide-react"

function Localizacao() {
  return (
    <section
      id="studio"
      className="py-20 sm:py-24 md:py-28 px-4 bg-black text-white"
    >

      {/* TÍTULO */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          Estúdio & Localização
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Conheça nosso espaço e saiba como chegar para sua sessão.
        </p>
      </div>

      {/* CONTEÚDO */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">

        {/* COLUNA ESQUERDA */}
        <div className="flex flex-col gap-4 sm:gap-6">

          {/* CARD */}
          <div className="bg-neutral-900 rounded-xl p-5 sm:p-6 border border-neutral-800 flex gap-4">
            <Store className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <div>
              <p className="text-xs sm:text-sm text-gray-400">Nome do Estúdio</p>
              <h3 className="font-semibold text-base sm:text-lg">
                GidalzoTattoo
              </h3>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-neutral-900 rounded-xl p-5 sm:p-6 border border-neutral-800 flex gap-4">
            <MapPin className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <div>
              <p className="text-xs sm:text-sm text-gray-400">Endereço</p>
              <h3 className="font-semibold text-sm sm:text-base">
                Av. Antonio Armando Justiça
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Parque Rodrigo Barreto – Aruja, SP
              </p>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-neutral-900 rounded-xl p-5 sm:p-6 border border-neutral-800 flex gap-4">
            <Clock className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <div>
              <p className="text-xs sm:text-sm text-gray-400">
                Horário de Funcionamento
              </p>
              <h3 className="font-semibold text-sm sm:text-base">
                Seg a Sáb, 11h às 23h
              </h3>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-neutral-900 rounded-xl p-5 sm:p-6 border border-neutral-800 flex gap-4">
            <Info className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <div>
              <p className="text-xs sm:text-sm text-gray-400">
                Informações Adicionais
              </p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Atendimento apenas com horário marcado. Próximo ao metrô Vila Madalena.
              </p>
            </div>
          </div>

        </div>

        {/* MAPA */}
        <div className="rounded-xl overflow-hidden border border-neutral-800 h-[320px] sm:h-[380px] md:h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3662.181340443995!2d-46.32617282467532!3d-23.381656178923617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDIyJzU0LjAiUyA0NsKwMTknMjUuMCJX!5e0!3m2!1spt-BR!2sbr!4v1767101081859!5m2!1spt-BR!2sbr"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  )
}

export default Localizacao
