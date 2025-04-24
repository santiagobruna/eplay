import { HeaderBar, LinkCart, LinkItem, Links } from './style'
import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'

const Header = () => {
  return (
    <HeaderBar>
        <div>
            <img src={logo} alt="Logo da E-play" />
            <nav>
                <Links>
                    <LinkItem><a href="#">Categorias</a></LinkItem>
                    <LinkItem><a href="#">Novidades</a></LinkItem>
                    <LinkItem><a href="#">Promoções</a></LinkItem>
                </Links>
            </nav>
        </div>
        <LinkCart href='#'>
            0 - produto(s) 
            <img src={carrinho} alt="Carrinho" />
        </LinkCart>
    </HeaderBar>
  )
}
export default Header
