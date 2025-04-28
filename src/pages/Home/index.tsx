import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductsList";
import Game from "../../models/Game";

import resident from '../../assets/resident.png'
import diablo from '../../assets/diablo.png'
import zelda from '../../assets/zelda.png'
import starWars from '../../assets/star_wars.png'
import streetFighter from '../../assets/street_fighter.png'
import fifa from '../../assets/fifa.png'

const promocoes: Game[] = [
    {
        id: 1,
        category: 'Ação',
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        system: 'Windows',
        infos: ['10%', 'R$ 199,90'],
        image: resident,
        title: 'Resident Evil 4 - Remake'
    },
    {
        id: 2,
        category: 'Ação',
        description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
        system: 'Windows',
        infos: ['10%', 'R$ 199,90'],
        image: resident,
        title: 'Resident Evil 4 - Remake'
    },
    {
        id: 3,
        category: 'Esporte',
        description: 'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
        system: 'PS5',
        infos: ['50%', 'R$ 99,90'],
        image: fifa,
        title: 'FIFA 23'
    },
    {
        id: 4,
        category: 'Esporte',
        description: 'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
        system: 'PS5',
        infos: ['50%', 'R$ 99,90'],
        image: fifa,
        title: 'FIFA 23'
    },
   
]

const emBreve: Game[] = [
    {
        id: 5,
        category: 'RPG',
        description: 'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
        system: 'Windows',
        infos: ['05/04'],
        image: diablo,
        title: 'Diablo 4'
    },
    {
        id: 6,
        category: 'Aventura',
        description: 'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
        system: 'Windows',
        infos: ['05/04'],
        image: starWars,
        title: 'Star Wars Jedi Survivor'
    },
    {
        id: 7,
        category: 'Luta',
        description: 'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
        system: 'Windows',
        infos: ['05/04'],
        image: streetFighter,
        title: 'Street Fighter 6'
    },
    {
        id: 8,
        category: 'RPG',
        description: 'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
        system: 'Switch',
        infos: ['05/04'],
        image: zelda,
        title: 'The Legend of Zelda - TOK'
    },
]
const Home = () => (
    <>
        <Banner/>
        <ProductsList games={promocoes} title='Promoções' background='gray'/>
        <ProductsList games={emBreve} title='Em breve' background='black'/>
    </>
)

export default Home;