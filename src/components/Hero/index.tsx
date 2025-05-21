import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './style'
import { formatPrice } from '../ProductsList'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <>
                <s>De {formatPrice(game.prices.old)}</s> <br />
              </>
            )}
            {game.prices.current && <>Por {formatPrice(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              onClick={addToCart}
              variant="primary"
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}
export default Hero
