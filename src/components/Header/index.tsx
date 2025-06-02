import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { HeaderBar, CartButton, LinkItem, Links, Hamburguer, HeaderRow, NavMobile } from './style'

import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'

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
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="Logo da E-play" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categorias" title='Clique aqui para acessar a página de categorias'>Categorias</Link>
              </LinkItem>
              <LinkItem>
                <HashLink title='Clique aqui para acessar a seção de embreve' to="/#coming-soon">Em breve</HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink title='Clique aqui para acessar a seção de promoções' to="/#on-sale">Promoções</HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length} <span> - produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'active' : ''}>
            <Links>
              <LinkItem>
                <Link onClick={() => setIsMenuOpen(false)} title='Clique aqui para acessar a página de categorias' to="/categorias">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <HashLink onClick={() => setIsMenuOpen(false)} title='Clique aqui para acessar a seção de embreve' to="/#coming-soon">Em breve</HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink onClick={() => setIsMenuOpen(false)} title='Clique aqui para acessar a seção de promoções' to="/#on-sale">Promoções</HashLink>
              </LinkItem>
            </Links>
      </NavMobile>
    </HeaderBar>
  )
}
export default Header
