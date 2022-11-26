import styled from "styled-components"
import Chute from "./components/Chute"
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
        <Chute/>

      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%
`
