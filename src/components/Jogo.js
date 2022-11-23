import styled from "styled-components"
import forca0 from "../assets/forca0.png"

export default function Jogo(){

    return(
        <Forca>
        <img src={forca0} alt="Imagem da forca vazia" />
        </Forca>
    )
}

const Forca = styled.div`
width: 400px;
height: 467px;

img {
width: 400px;
height: 467px;
}

`