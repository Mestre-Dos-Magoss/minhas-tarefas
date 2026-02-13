import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../Utils/Enums'

type FiltroState = {
  termo?: string // termo de busca que o usuário está prcurando
  criterio: 'prioridade' | 'status' | 'todas' // O critério é com base no que ele esta procurando
  valor?: enums.Prioridade | enums.Status //Os possíveis valores do valor do critério
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload //aqui eu atribuo ao termo o valor que esta sendo inserido pelo usuário
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
