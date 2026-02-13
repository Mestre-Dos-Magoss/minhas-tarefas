import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Botao = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-size: 40px;
  text-decoration: none;
  border-radius: 50%;
  background-color: ${variaveis.verde};
  color: #fff;
`
