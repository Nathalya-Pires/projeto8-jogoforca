import styled from "styled-components"

export default function Chute() {

    return (
        <ContainerChute>
            <p>Já sei a palavra!</p>
            <input type="text"/>
            <button>Chutar</button>
            </ContainerChute>
    )
        
    
}

const ContainerChute = styled.div`
    margin: 0 auto;
    width: 50%;
    display: flex;
    align-items: center;

    justify-content: space-between;
    margin-bottom: 2%;

    p{
        font-family:'Roboto';
        font-weight: 400;
        font-size: 1.5vw;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #A11457;

    }

    input {
        width: 55%;
        height: 2.9vw;
        box-sizing: border-box;
        border: 1px solid #FF24BD;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
    }

    button{
        width: 7.5vw;
        height: 2.9vw;
        background-color: #FF9DC4;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 1.2vw;
        line-height: 19px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        color: #A11457;
        border: 1px solid #FF24BD;
        border-radius: 3px;
        cursor: pointer;
    }
`