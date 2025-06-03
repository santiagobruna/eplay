import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Tag from '../Tag'
import Button from '../Button'

import { formatPrice } from '../../utils'
import { close, remove } from '../../store/reducers/cart'
import * as S from './style'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }
  const getTotalPrice = () => {
    return items.reduce((acc, valorAtual) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acc += valorAtual.prices.current!)
    }, 0)
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <button className="btn-close" onClick={closeCart}>
          Fechar
        </button>
        <ul>
          {items.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {formatPrice(getTotalPrice())} {''}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </S.SideBar>
    </S.CartContainer>
  )
}
export default Cart
