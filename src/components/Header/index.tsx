import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import * as S from './style'

import logo from '../../assets/logo.svg'
import cart from '../../assets/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </S.Hamburguer>
          <Link to="/">
            <img src={logo} alt="Logo da E-play" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link to="/categorias" title='Clique aqui para acessar a página de categorias'>Categorias</Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink title='Clique aqui para acessar a seção de embreve' to="/#coming-soon">Em breve</HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink title='Clique aqui para acessar a seção de promoções' to="/#on-sale">Promoções</HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          {items.length} <span> - produto(s)</span>
          <img src={cart} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'active' : ''}>
            <S.Links>
              <S.LinkItem>
                <Link onClick={() => setIsMenuOpen(false)} title='Clique aqui para acessar a página de categorias' to="/categorias">Categorias</Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink onClick={() => setIsMenuOpen(false)} title='Clique aqui para acessar a seção de embreve' to="/#coming-soon">Em breve</HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink onClick={() => setIsMenuOpen(false)} title='Clique aqui para acessar a seção de promoções' to="/#on-sale">Promoções</HashLink>
              </S.LinkItem>
            </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}
export default Header
