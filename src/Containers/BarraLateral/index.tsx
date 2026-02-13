import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import FiltroCard from '../../componentes/FiltroCard'
import * as enums from '../../Utils/Enums'

import { Button, Campo } from '../../styles/index'
import * as S from './styles'

type Props = {
  temFiltros: boolean
}

const BarraLateral = ({ temFiltros }: Props) => {
  const termo = useSelector((state: RootReducer) => state.filtro.termo)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <S.Aside>
      <div>
        {temFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar tarefas..."
              value={termo}
              onChange={(event) => dispatch(alteraTermo(event.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              <FiltroCard criterio="todas" legenda="Todas" />
            </S.Filtros>
          </>
        ) : (
          <Button type="button" onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
