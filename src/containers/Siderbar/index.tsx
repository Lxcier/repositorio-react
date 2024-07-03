import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, Info, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Info>
        <Titulo fontSize={20} marginBottom={2}>
          Lucas Lucier
        </Titulo>
        <Paragrafo tipo="secundario" fontSize={16} marginTop={0}>
          Lxcier
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro Front-end
        </Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
      </Info>
    </SidebarContainer>
  </aside>
)

export default Sidebar
