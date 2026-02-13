import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  alteraStatus,
  remover,
  salvarEdicao
} from '../../store/reducers/tarefa'
import TarefaClass from '../../models/Tarefa'
import * as enums from '../../Utils/Enums/index'

import { BotaoSalvar, Button } from '../../styles'
import * as S from './tarefa'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  descricao: descricaoOriginal,
  status,
  id
}: Props) => {
  const [EstaEditando, SetEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  const disptch = useDispatch()

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelaEdicao() {
    SetEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  const alteraStatusDaTarefa = (evento: ChangeEvent<HTMLInputElement>) => {
    disptch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          onChange={alteraStatusDaTarefa}
          checked={status === enums.Status.CONCLUIDA}
        />
        <S.Titulo>
          {EstaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!EstaEditando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      ></S.Descricao>
      <S.BarraAcoes>
        {EstaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                disptch(
                  salvarEdicao({
                    descricao,
                    id,
                    titulo,
                    prioridade,
                    status
                  })
                )
                SetEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoRemover onClick={cancelaEdicao}>Cancelar</S.BotaoRemover>
          </>
        ) : (
          <>
            <Button onClick={() => SetEstaEditando(true)}>Editar</Button>
            <S.BotaoRemover onClick={() => disptch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
