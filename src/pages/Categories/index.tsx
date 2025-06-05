import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSportsGames } =
    useGetSportGamesQuery()
  const { data: fightGames, isLoading: isLoadingFightGames } =
    useGetFightGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulationGames } =
    useGetSimulationGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpgGames } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpgGames}
      />
      <ProductsList
        games={actionGames}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulationGames}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSportsGames}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFightGames}
      />
    </>
  )
}

export default Categories
