import styled from 'styled-components'
import { cores } from '../../style'

type InputGroupProps = {
  maxWidth?: string
}
type RowProps = {
  marginTop?: string
}
type TabButtonProps = {
  isActive?: boolean
}
export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;
`

export const Group = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  input,
  select {
    width: 100%;
    background-color: ${cores.branca};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.branca};
  }
`
export const TabButton = styled.button<TabButtonProps>`
  height: 32px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.branca};
  background-color: ${(props) => (props.isActive ? cores.verde : cores.preta)};
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;
  img {
    margin-right: 8px;
  }
`
