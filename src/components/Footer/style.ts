import styled from 'styled-components'
import { cores } from '../../style'
import { HashLink } from 'react-router-hash-link'
export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`
export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
`
export const Links = styled.ul`
  display: flex;
`
export const Link = styled(HashLink)`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
