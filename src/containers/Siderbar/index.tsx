import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao } from './styles'

const Sidebar = () => (
  <aside>
    <div>
      <Avatar />
      <Titulo fontSize={20}>Lucas Lucier</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Lxcier
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </div>
  </aside>
)

export default Sidebar
