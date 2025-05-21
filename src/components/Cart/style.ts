import styled from 'styled-components'
import { cores } from '../../style'
import { TagContainer } from '../Tag/style'
import { ButtonContainer } from '../Button/style'
import close from '../../assets/close.png'
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${cores.cinza};
  z-index: 1;
  padding: 40px 16px 0 16px;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-bottom: 24px;
  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};
  margin: 32px 0 16px 0;
`
export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0;
  position: relative;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
  h3 {
    color: ${cores.branca};
    font-size: 16px;
    font-weight: bold;
  }
  span {
    color: ${cores.branca};
    display: block;
    font-size: 14px;
    font-weight: bold;
  }
  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }
  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8;
    right: 0;
    cursor: pointer;
  }
`
