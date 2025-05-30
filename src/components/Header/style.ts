import styled from 'styled-components'
import { breakpoints, cores } from '../../style'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  @media(max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`
export const HeaderBar = styled.div`
  background-color: ${cores.cinza};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 80px;

  a {
    color: ${cores.branca};
    font-weight: bold;
    text-decoration: none;
  }
  
`

export const LinkItem = styled.li`
  margin-right: 16px;
  @media(max-width: ${breakpoints.tablet}) {
    margin-right: 0;
    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`
export const NavMobile = styled.nav`
  display: none;
  
  &.active {
    display: block;
  }
`
export const CartButton = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-left: 16px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    span{ display: none; }
  }
  
`
export const Hamburguer = styled.div`
  width: 32px;
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${cores.branca};
    margin-bottom: 4px;
    border-radius: 2px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;
      
      ${Links} {
      display: none;
    }
  }
  }
`