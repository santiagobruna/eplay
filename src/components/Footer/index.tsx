import { Container, FooterSection, Link, Links, SectionTitle } from './style'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link title='Clique aqui para acessar jogos de rpg' to="/categorias#rpg">RPG</Link>
            </li>
            <li>
              <Link title='Clique aqui para acessar jogos de ação' to="/categorias#action">AÇÃO</Link>
            </li>
            <li>
              <Link title='Clique aqui para acessar jogos de esportes' to="/categorias#sports">ESPORTES</Link>
            </li>
            <li>
              <Link title='Clique aqui para acessar jogos de simulação' to="/categorias#simulation">SIMULAÇÃO</Link>
            </li>
            <li>
              <Link title='Clique aqui para acessar jogos de luta' to="/categorias#fight">LUTA</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso Rápido</SectionTitle>
          <Links>
            <li>
              <Link title='Clique aqui para acessar a seção de promoções' to="/#on-sale">PROMOCOES</Link>
            </li>
            <li>
              <Link  title='Clique aqui para acessar a seção de embreve' to="/#coming-soon">EM BREVE</Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - © E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}

export default Footer
