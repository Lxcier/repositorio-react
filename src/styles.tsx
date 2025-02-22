import styled, { createGlobalStyle } from 'styled-components'

import { Theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

    body {
      padding: 80px 18px;
      background-color: ${(props) => (props.theme as Theme).corDeFundo};
      transition: all ease-in-out .2s;

      @media (max-width: 767px) {
        padding: 16px 0 0;
      }

      @media (min-width: 1280px) {
        padding: 89px 0 0;
      }
    }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 767px) {
    max-width: 80%;
    display: block;
  }
`
