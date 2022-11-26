import styled from "styled-components"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import GlobalStyle from "./css/GlobalStyle"
import palavras from "./palavras"

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Jogo />
        <Letras/>

      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%
`
