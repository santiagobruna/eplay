import { useState } from "react";
import Section from "../Section";

import hogwarts  from '../../assets/fundo-hogwarts.png'
import spiderman from '../../assets/banner-homem-aranha.png'
import close from '../../assets/close.png'


import play from '../../assets/play.png'
import zoom from '../../assets/zoom.png'
import { Item, Items, Action, Modal, ModalContent } from "./style";
import { GalleryItem } from "../../pages/Home";

const mock: GalleryItem[] = [
    {
        type: 'image',
        url: spiderman,
    },
    {
        type: 'image',
        url: hogwarts,
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/C_IdgsdHwAo?si=_xqTZ58CEmiKd0Bv',
    },
]

type Props = {
    defaultCover: string
    name: string
    items: GalleryItem[]
}

interface ModalState extends GalleryItem {
    isVisible: boolean
}

const Galery = ({defaultCover, name, items} : Props) => {
    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        type: 'image',
        url: '',
    })

    const getMidiaCover = (item: GalleryItem) => {
        if(item.type === 'image') return item.url
        return defaultCover
    }
    const getMidiaIcon = (item: GalleryItem) => {
        if(item.type === 'image') return zoom
        return play
    }
    const closeModal = () => {
        setModal({
            isVisible: false,
            type: 'image',
            url: ''
        })
    }
    return(
        <>
            <Section title='Galeria' background='black'>
                <Items>
                    {items.map((media, index) => (
                        <Item key={media.url} 
                            onClick={() => {
                                setModal({
                                    isVisible: true,
                                    type: media.type,
                                    url: media.url
                                });
                            }}
                            >
                            <img src={getMidiaCover(media)} alt={`Mídia ${index + 1} de ${name}`} />
                            <Action>
                                <img src={getMidiaIcon(media)} alt="Clique para maximizar a Mídia" />
                            </Action>
                        </Item>
                    ))}
                    
                </Items>
            </Section>
            <Modal className={modal.isVisible ? 'visivel' : ''}>
                <ModalContent className="container">
                    <header>
                        <h4>{name}</h4>
                        <img src={close}
                        alt="Ícone de fechar Modal"
                        onClick={() => 
                            closeModal()
                        }
                        />
                    </header>
                    {modal.type === 'image' ? (
                        <img src={modal.url} alt="" />
                    ): (
                        <iframe src={modal.url} frameBorder={0}></iframe>
                    )}
                </ModalContent>
                <div className="overlay"
                onClick={() => 
                    closeModal()
                }
                >

                </div>
            </Modal>
        </>
    )
}
export default Galery;