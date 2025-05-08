import bannerImg from '../../assets/fundo-hogwarts.png'
import Button from '../Button';
import Tag from '../Tag';
import { Banner, Infos } from './style';
const Hero = () => {
    return(
        <Banner style={{backgroundImage: `url(${bannerImg})`}}>
            <div className='container'>
                <div>
                    <Tag>RPG</Tag>
                    <Tag>PS5</Tag>
                </div>
                <Infos>
                    <h2>Hogwarts Legacy</h2>
                    <p>
                        <s>De R$ 250,00</s> <br />
                        Por R$ 190,00
                    </p>
                    <Button variant='primary' type='button' title='Clique aqui para adicionar este jogo ao carrinho'>Adicionar ao carrinho</Button>
                </Infos>
            </div>
        </Banner>
    )
}
export default Hero;