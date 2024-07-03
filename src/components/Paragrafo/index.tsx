import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
  marginTop?: number
}

const Paragrafo = ({
  children,
  tipo = 'principal',
  fontSize,
  marginTop
}: Props) => (
  <P tipo={tipo} fontSize={fontSize} marginTop={marginTop}>
    {children}
  </P>
)

export default Paragrafo
