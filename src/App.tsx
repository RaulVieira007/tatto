import Home from "./pages/Home"
import NavBar from "./Components/NavBar"
import Estilos from "./pages/Estilos"
import Sobre from "./Components/Sobre"
import Localizacao from "./Components/Localizacao"
import Contato from "./Components/Contato"

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      <Home />
      <Estilos />
      <Sobre />
      <Localizacao />
      <Contato />
    </div>
  )
}

export default App
