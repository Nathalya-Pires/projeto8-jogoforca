import styled from "styled-components"
import forca0 from "../assets/forca0.png"

export default function Jogo() {

    return (
        <>
            <ContainerForca>
                <img src={forca0} alt="Imagem da forca" />
                <Botao>Escolher Palavra</Botao>
                {/* <PalavraJogo/> */}
            </ContainerForca>
            
        </>
    )


}

const ContainerForca = styled.div`
display: flex;
width: 80%;
display: flex;
margin: 0 auto;

img {
width: 39%;
height: 40%;
margin-top:5%;
}
`

const Botao = styled.button`
    width: 20%;
    height: 60px;
    background-color: #27AE60;
    border-radius: 8px;
    border: none;
    margin-top: 8%;
    margin-left: 40%;

`