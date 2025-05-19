import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  if (actionGames && simulationGames && sportsGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList games={rpgGames} title="RPG" background="black" />
        <ProductsList games={actionGames} title="Ação" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
        <ProductsList games={sportsGames} title="Esportes" background="gray" />
        <ProductsList games={fightGames} title="Luta" background="black" />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Categories
