import * as S from './style'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de rpg"
                to="/categorias#rpg"
              >
                RPG
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de ação"
                to="/categorias#action"
              >
                AÇÃO
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de esportes"
                to="/categorias#sports"
              >
                ESPORTES
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de simulação"
                to="/categorias#simulation"
              >
                SIMULAÇÃO
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de luta"
                to="/categorias#fight"
              >
                LUTA
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso Rápido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar a seção de promoções"
                to="/#on-sale"
              >
                PROMOCOES
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar a seção de embreve"
                to="/#coming-soon"
              >
                EM BREVE
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p>{currentYear} - © E-PLAY Todos os direitos reservados</p>
      </div>
    </S.Container>
  )
}

export default Footer
