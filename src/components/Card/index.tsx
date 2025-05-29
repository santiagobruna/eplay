import { CardContainer } from './style'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => {
  return (
    <CardContainer className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </CardContainer>
  )
}
export default Card
