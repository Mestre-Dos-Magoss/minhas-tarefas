import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;

  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export default EstiloGlobal

export const MainContainer = styled.main`
  padding: 0 40px;
  overflow-y: scroll;
  height: 100vh;
`
export const Titulo = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`
export const Campo = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
`
export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Button)`
  background-color: ${variaveis.verde};
`
