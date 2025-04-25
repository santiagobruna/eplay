import Tag from "../Tag"
import { Card, Descricao, Titulo } from "./style"

const Product = () => {
    return (
        <Card>
            <img src="//place-hold.it/222x250" alt="" />
            <Titulo>Nome do Jogo</Titulo>
            <Tag>Categoria</Tag>
            <Tag>Windows</Tag>
            <Descricao>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptates, molestias aspernatur officia harum, dignissimos excepturi amet doloremque impedit odio tenetur explicabo esse voluptatum obcaecati id commodi, quibusdam in alias.</Descricao>
        </Card>
    )
}

export default Product