import { useState } from "react"
import styled from "styled-components"
import Chute from "./components/Chute"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import GlobalStyle from "./css/GlobalStyle"
import palavras from "./palavras"
import alfabeto from "./alfabeto"

export default function App() {
  const [desabilitaInput, setDesabilitaInput] = useState(true)
  const [letrasClicadas, setLetrasClicadas] = useState([alfabeto])

  return (
    <>
      <GlobalStyle />
      <Container>
        <Jogo />
        <Letras letrasClicadas={letrasClicadas}/>
        <Chute desabilitaInput={desabilitaInput}/>

      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%
`
