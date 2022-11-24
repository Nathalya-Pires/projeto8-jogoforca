import styled from "styled-components"
import Jogo from "./components/Jogo"
import GlobalStyle from "./css/GlobalStyle"
import palavras from "./palavras"

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Jogo />

      </Container>
    </>
  )
}

const Container = styled.div`
width: 100%;
background-color: yellow;

`
