import { useState } from "react"

type Tattoo = {
  id: number
  categoria: string
  img: string
}

function Estilos() {
  const [filtro, setFiltro] = useState("Todos")
  const [imagemAtiva, setImagemAtiva] = useState<string | null>(null)

  const categorias = [
    "Todos",
    "Realismo",
    "Delicado",
    "Cobertura",
    "Letreiro",
  ]

  const tattoos: Tattoo[] = [
    {
      id: 1,
      categoria: "Realismo",
      img: "https://i.pinimg.com/736x/ae/06/35/ae0635d9a787511a07689aaa4578776d.jpg",
    },
    {
      id: 2,
      categoria: "Realismo",
      img: "https://i.pinimg.com/736x/62/c8/74/62c8746e840c24cb2e03beadd1883ec3.jpg",
    },
    {
      id: 3,
      categoria: "Realismo",
      img: "https://i.pinimg.com/736x/1f/0c/8b/1f0c8b6a5825ff2316c85f24e87b5574.jpg",
    },
    {
      id: 4,
      categoria: "Realismo",
      img: "https://i.pinimg.com/736x/04/b8/b3/04b8b39bd76851f82d728c8bf676cc32.jpg",
    },
    {
      id: 5,
      categoria: "Realismo",
      img: "https://i.pinimg.com/736x/49/97/8d/49978df4ea9f8037d13bc584ef7b3c9a.jpg", 
    },
    {
      id: 6,
      categoria: "Delicado",
      img: "https://i.pinimg.com/736x/27/e2/21/27e221611a332f56d395a93829069515.jpg",
    },
    {
      id: 7,
      categoria: "Delicado",
      img: "https://i.pinimg.com/736x/29/20/c6/2920c6ed34e6d05cbd4d5ac3118b2f69.jpg",
    },
    {
      id: 8,
      categoria: "Delicado",
      img: "https://i.pinimg.com/736x/85/44/39/854439d95b910a6257fb252e88365159.jpg",
    },
    {
      id: 9,
      categoria: "Delicado",
      img: "https://i.pinimg.com/736x/12/ee/58/12ee58bb5624c902da9768d51ad8fc92.jpg",
    },
    {
      id: 10,
      categoria: "Delicado",
      img: "https://i.pinimg.com/736x/1a/6e/c3/1a6ec38a69e0a7de6a9f4d9951373438.jpg",
    },
     {
      id: 11,
      categoria: "Cobertura",
      img: "https://i.pinimg.com/736x/42/c8/45/42c84553e6f8272dae57b4ce2090c95e.jpg",
    },
     {
      id: 12,
      categoria: "Cobertura",
      img: "https://i.pinimg.com/736x/3c/05/cd/3c05cd0923d78db39e225a2bbb375c4e.jpg",
    },
     {
      id: 13,
      categoria: "Cobertura",
      img: "https://scontent-gru2-2.cdninstagram.com/v/t51.82787-15/548896646_18082998608503642_2506381095339667335_n.heic?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=106&ig_cache_key=MzcyMjkxMDE0MTU1NDcxNTE5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=bxNTEEYVUqUQ7kNvwG9UprA&_nc_oc=AdlRfQXB8l9vpCMECgFE9Sc-sCGkC3v_HZ5e-TmBq-UiHwPPk3XOPTKF1Nxj0y59N-c&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_gid=FORMqmeplBK1pnWimItTHA&oh=00_AflY19R2hhCuZO44VARkvhcA8bMsKU31-XlwRXx4-6f2yw&oe=6959992F",
    },
     {
      id: 14,
      categoria: "Cobertura",
      img: "https://scontent-gru1-1.cdninstagram.com/v/t51.82787-15/548502795_18082998626503642_2738999369732233313_n.heic?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=104&ig_cache_key=MzcyMjkxMDE0MTY3MjE1NDU2NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=vhvWVRp1ovMQ7kNvwH1kzKP&_nc_oc=AdmOKOKvfSbI-lDWFlChv5xzTDMFuPBMWoXPES_OlDI8_zSCaAwo-g87CX5DRzb7eGA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_gid=FORMqmeplBK1pnWimItTHA&oh=00_Afmyp3xYxfB7QNbvcldqx77UOUvy3-VT-JjdPbdUwSoejQ&oe=6959A044",
    },
    {
      id: 15,
      categoria: "Letreiro",
      img: "https://i.pinimg.com/736x/86/bf/5a/86bf5abaf52bbb83e8da931c88dbdbfa.jpg",
    },
       {
      id: 16,
      categoria: "Letreiro",
      img: "https://i.pinimg.com/736x/1a/65/58/1a65585a19d4e08d882f87894149e76e.jpg",
    },
       {
      id: 17,
      categoria: "Letreiro",
      img: "https://i.pinimg.com/736x/98/82/75/988275f4b9f553f1f7dd9eebd8d3977b.jpg",
    },
      {
      id: 19,
      categoria: "Delicado",
      img: "https://i.pinimg.com/736x/1e/39/ff/1e39ff5c22f6c68249f4bb7f4a74b516.jpg",
    },
  ]

  const tattoosFiltradas =
    filtro === "Todos"
      ? tattoos
      : tattoos.filter((tattoo) => tattoo.categoria === filtro)

  return (
    <section
      id="estilos"
      className="py-24 px-4 text-center bg-black text-white"
    >
      {/* TÍTULO */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
        Estilos de Tatuagem
      </h2>

      {/* FILTROS */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            className={`
              px-6 py-2 rounded-full text-sm uppercase tracking-wider
              border transition-all duration-300
              ${
                filtro === cat
                  ? "bg-orange-500 text-black border-orange-500"
                  : "border-neutral-700 text-gray-300 hover:text-orange-500 hover:border-orange-500"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GALERIA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {tattoosFiltradas.map((tattoo) => (
          <div
            key={tattoo.id}
            onClick={() => setImagemAtiva(tattoo.img)}
            className="
              relative bg-neutral-900 rounded-xl overflow-hidden
              flex items-center justify-center
              h-56 sm:h-64 md:h-72
              cursor-pointer group
              transition
              active:scale-95
              hover:shadow-orange-500/20 hover:shadow-xl
            "
          >
            <img
              src={tattoo.img}
              alt={tattoo.categoria}
              loading="lazy"
              className="
                max-h-full max-w-full
                object-contain
                transition-transform duration-500
                group-hover:scale-105
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {imagemAtiva && (
        <div
          onClick={() => setImagemAtiva(null)}
          className="
            fixed inset-0 z-50
            bg-black/80 backdrop-blur-sm
            flex items-center justify-center
            px-4
          "
        >
          {/* FECHAR */}
          <button
            onClick={() => setImagemAtiva(null)}
            className="
              absolute top-6 right-6
              text-white text-3xl
              hover:text-orange-500
              transition
            "
          >
            ✕
          </button>

          {/* IMAGEM AMPLIADA */}
          <img
            src={imagemAtiva}
            alt="Tattoo ampliada"
            onClick={(e) => e.stopPropagation()}
            className="
              max-w-full max-h-[85vh] sm:max-h-[90vh]
              object-contain
              rounded-xl
              shadow-2xl
              animate-fadeIn
            "
          />
        </div>
      )}
    </section>
  )
}

export default Estilos
