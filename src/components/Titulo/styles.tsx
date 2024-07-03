import styled from 'styled-components'

export type Props = {
  children: string
  fontSize?: number
  marginBottom?: number
}

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + 'px' : '16px'};
  font-weight: bold;
`
