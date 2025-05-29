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
              <Link to="/categorias#rpg">RPG</Link>
            </li>
            <li>
              <Link to="/categorias#action">AÇÃO</Link>
            </li>
            <li>
              <Link to="/categorias#sports">ESPORTES</Link>
            </li>
            <li>
              <Link to="/categorias#simulation">SIMULAÇÃO</Link>
            </li>
            <li>
              <Link to="/categorias#fight">LUTA</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso Rápido</SectionTitle>
          <Links>
            <li>
              <Link to="/#on-sale">PROMOCOES</Link>
            </li>
            <li>
              <Link to="/#coming-soon">EM BREVE</Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - © E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}

export default Footer
