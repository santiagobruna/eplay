import styled from 'styled-components'
import { colors } from '../../style'
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
  background-color: ${colors.gray};
  z-index: 1;
  padding: 40px 16px 0 16px;
  position: relative;
  .btn-close {
    position: absolute;
    top: 5px;
    right: 10px;
    border: none;
    cursor: pointer;
    background-color: #da6c6c;
    color: ${colors.white};
    font-weight: bold;
    padding: 5px 10px;
  }
  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;
  span {
    display: block;
    font-size: 12px;
    color: ${colors.ligthGray};
  }
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin: 32px 0 16px 0;
`
export const CartItem = styled.li`
  display: flex;
  margin-top: 20px;
  border-bottom: 1px solid ${colors.ligthGray};
  padding: 8px 0;
  position: relative;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
  h3 {
    color: ${colors.white};
    font-size: 16px;
    font-weight: bold;
  }
  span {
    color: ${colors.white};
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
