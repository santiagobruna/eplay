import styled from 'styled-components'
import { cores } from '../../style'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const Group = styled.div`
  flex: auto;
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  input {
    width: 100%;
    background-color: ${cores.branca};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.branca};
  }
`
