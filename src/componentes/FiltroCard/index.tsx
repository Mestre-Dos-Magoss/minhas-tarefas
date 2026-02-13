import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../Utils/Enums'

import * as S from './filtroCard'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  // const { filtro, tarefas } = useSelector((state: RootReducer) => state)
  const filtro = useSelector((state: RootReducer) => state.filtro)
  const tarefas = useSelector((state: RootReducer) => state.tarefas)

  const dispatch = useDispatch()

  const filtrar = () => {
    dispatch(alterarFiltro({ criterio, valor }))
  }

  const verificaSeEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contaTarefas = () => {
    let tarefasContadas = tarefas.itens

    if (criterio === 'todas') return tarefasContadas.length
    if (criterio === 'prioridade') {
      return (tarefasContadas = tarefasContadas.filter(
        (t) => t.prioridade === valor
      )).length
    }
    if (criterio === 'status') {
      return (tarefasContadas = tarefasContadas.filter(
        (t) => t.status === valor
      )).length
    }
  }

  const ativo = verificaSeEstaAtivo()
  const contador = contaTarefas()

  return (
    <S.Card $ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
