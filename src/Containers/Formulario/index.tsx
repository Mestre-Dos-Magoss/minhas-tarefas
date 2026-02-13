import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { useNavigate } from 'react-router-dom'
import * as enums from '../../Utils/Enums'
import { cadastrar } from '../../store/reducers/tarefa'

import * as S from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        descricao,
        prioridade,
        status: enums.Status.PENDENTE
      })
    )

    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <S.Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          as="textarea"
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          placeholder="Descrição da tarefa"
        />
        <S.Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <S.Opcao key={prioridade}>
              <input
                value={prioridade}
                type="radio"
                name="prioridade"
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
                onChange={({ target }) =>
                  setPrioridade(target.value as enums.Prioridade)
                }
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </S.Opcao>
          ))}
        </S.Opcoes>
        <BotaoSalvar type="submit">cadastrar</BotaoSalvar>
      </S.Form>
    </MainContainer>
  )
}

export default Formulario
