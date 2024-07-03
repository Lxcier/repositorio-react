import { Titulo as TituloEstilo } from './styles'
import { Props } from './styles'

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
