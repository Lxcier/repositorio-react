import Projetos from './components/Projetos'
import Sobre from './components/Sobre'
import Sidebar from './containers/Siderbar'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <Sobre />
        <Projetos />
      </Container>
    </>
  )
}

export default App
