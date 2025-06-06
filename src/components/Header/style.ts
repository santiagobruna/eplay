import styled from 'styled-components'
import { breakpoints, colors } from '../../style'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`
export const HeaderBar = styled.div`
  background-color: ${colors.gray};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 80px;

  a,
  span {
    color: ${colors.white};
    font-weight: bold;
    text-decoration: none;
  }

  h1 {
    line-height: 0;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
  @media (max-width: ${breakpoints.tablet}) {
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

  @media (max-width: ${breakpoints.tablet}) {
    &.active {
      display: block;
    }
  }
`
export const CartButton = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`
export const Hamburguer = styled.div`
  width: 32px;
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${colors.white};
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
