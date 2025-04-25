import Product from "../Product";
import { Container, List, Title } from "./style";
type Props = {
    title: string;
    background: 'gray' | 'black'
}
const ProductsList = ({title, background}: Props) => {
    return(
        <Container>
            <div className="container">
                <Title>{title}</Title>
                <List>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </List>
            </div>
        </Container>
    )
}
export default ProductsList;