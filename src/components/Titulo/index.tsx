import { Titulo as TituloEstilo } from './styles'
import { Props } from './styles'

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize} marginBottom={props.marginBottom}>
    {props.children}
  </TituloEstilo>
)

export default Titulo
