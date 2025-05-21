import styled from 'styled-components'
import { breakpoints, cores } from '../../style'

export const HeaderBar = styled.div`
  background-color: ${cores.cinza};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
  a {
    color: ${cores.branca};
    font-weight: bold;
    text-decoration: none;
  }
  @media(max-width: ${breakpoints.tablet}){
    display: none;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;
`
export const CartButton = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-left: 16px;
  }
`
