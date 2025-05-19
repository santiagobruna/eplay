import { Imagem, Precos, Titulo } from './style'
import Tag from '../Tag'
import Button from '../Button'
import { formatPrice } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'
const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()
  if (!game) {
    return <h3>Carregando...</h3>
  }
  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <s>{formatPrice(game.prices.old)}</s> <br />
            por apenas {formatPrice(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
export default Banner
