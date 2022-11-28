import styled from "styled-components"

export default function Letras() {

    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


     return (
        <ContainerLetras>
            {alfabeto.map((l) => <Letra letra={l} key={l} />)}
        </ContainerLetras>

    )

}

function Letra(props) {

    return (

        <Let>{props.letra}</Let>

    ) 

}

const ContainerLetras = styled.ul`
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    padding: 2%;
    width: 65%;
`

const Let = styled.li`
    background-color: #FF9DC4;
    width: 4.5%;
    height: 3vw;
    margin: 10px;
    border-radius: 7%;
    border: 1px solid #FF24BD;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #C93281;
    line-height: 19px;
    display: flex;   
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 1px;
    cursor: pointer;
`