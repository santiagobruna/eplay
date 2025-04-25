import { Imagem, Precos, Titulo } from "./style";
import bannerImg from '../../assets/banner-homem-aranha.png';
const Banner = () => {
    return (
        <Imagem style={{backgroundImage: `url(${bannerImg})`}}>
            <div className="container">
                <Titulo>Marvel's Spider-Man: Miles Morales PS4 & PS5</Titulo>
                <Precos>De <s>R$ 250,00</s> <br /> 
                por apenas R$ 99,90</Precos>
            </div>
        </Imagem>
    )
}
export default Banner;