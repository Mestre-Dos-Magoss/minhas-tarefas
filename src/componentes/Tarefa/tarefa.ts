import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../Utils/Enums'
import { Button } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'prioridade' | 'status'
}

function corDeFundo(props: TagProps): string {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
  } else {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    margin-bottom: 16px;
  }
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  font-weight: bold;
  font-size: 10px;
  color: #fff;
  background-color: ${(props) => corDeFundo(props)};
  border-radius: 16px;
  margin-right: 16px;
`

export const Descricao = styled.textarea`
  display: block;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto mono', monospace;
  width: 100%;
  margin-top: 16px;
  border: none;
  resize: none;
  background-color: transparent;
  color: #8b8b8b;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoRemover = styled(Button)`
  background-color: ${variaveis.vermelho};
`
