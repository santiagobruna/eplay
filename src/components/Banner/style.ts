import styled from "styled-components";
import { TagContainer } from "../Tag/style";

export const Imagem = styled.div`
    width: 100%;
    height: 560px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    font-weight: bold;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        position: relative;
        padding-top: 340px; 
    }
    ${TagContainer} {
        position: absolute;
        top: 32px;
    }
    `

export const Titulo = styled.h2`
    font-size: 36px;
    max-width: 450px;
`

export const Precos = styled.p`
    max-width: 232px;
    font-size: 24px;
    margin-top: 24px;

`