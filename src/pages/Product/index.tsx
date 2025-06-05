import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Galery from '../../components/Galery'

import { useGetGameQuery } from '../../services/api'
import Loader from '../../components/Loader'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: game } = useGetGameQuery(id)
  if (!game) {
    return <Loader />
  }
  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Galery
        defaultCover={game.media.cover}
        name={game.name}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
