import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;

    &:nth-child(1) {
      margin-right: 8px;
    }

    @media (max-width: 767px) {
      height: auto;
      width: 100%;

      &:nth-child(1) {
        margin-right: 0;
      }
    }
  }
`
