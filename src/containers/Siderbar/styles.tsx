import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Info = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;

    width: 100%;
  }
`

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    margin: 8px 0 0;
  }
`

export const BotaoTema = styled.button`
  border: none;

  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  border-radius: 6px;
  padding: 8px;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;

  @media (max-width: 767px) {
    margin-top: 8px;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    gap: 18px;
    justify-content: space-between;
  }
`
