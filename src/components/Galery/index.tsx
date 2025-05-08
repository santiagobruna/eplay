import Section from "../Section";
import zelda from '../../assets/zelda.png'
import { Item, Items } from "./style";

const Galery = () => {
    return(
        <Section title='Galeria' background='black'>
            <Items>
                <Item>
                    <img src={zelda} alt="imagem do link" />
                </Item>
                <Item>
                    <img src={zelda} alt="imagem do link" />
                </Item>
                <Item>
                    <img src={zelda} alt="imagem do link" />
                </Item>
                <Item>
                    <img src={zelda} alt="imagem do link" />
                </Item>
            </Items>
        </Section>
    )
}
export default Galery;