import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: 'rgba(255, 255, 255, 1)',
  preta: 'rgba(17, 17, 17, 1)',
  cinza: 'rgba(51, 51, 51, 1)',
  verde: 'rgba(16, 172, 132, 1)',
  cinzaClaro: 'rgba(163, 163, 163, 1)'
}
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }
    body {
        background-color: ${cores.preta};
        color: ${cores.branca};
        padding-top: 40px;
    }

    .container{
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        @media(max-width: ${breakpoints.desktop}){
            max-width: 80%;
        }
    }
`
