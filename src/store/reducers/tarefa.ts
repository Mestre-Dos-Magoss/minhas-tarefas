import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Tarefa from '../../models/Tarefa'
import * as enums from '../../Utils/Enums'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Minhas prioridades de ano novo',
      descricao: 'Se desempenhar muito para consquistar uma nova profissão!',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 2,
      titulo: 'Hábitos inteligentes',
      descricao:
        'Mudar o horário de dormir, praticar atividades físicas, ter uma dieta saúdavel',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 3,
      titulo: 'Pagar as contas do cartão',
      descricao:
        'Pagar o cartão da Nubank e da Rico e as faturas de luz, internet e água',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE
    },
    {
      id: 4,
      titulo: 'Não esquecer das contas de água e energia',
      descricao:
        'Procurar os talões mais antigos e ver se todos já estão pagos',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE
    }
  ]
}

const tarefaSlice = createSlice({
  name: 'tarefa',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    salvarEdicao: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find((tarefa) => {
        tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      })

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const idDaUltimaTarefa = state.itens[state.itens.length - 1]

        const novaTarefa = {
          ...action.payload,
          id: idDaUltimaTarefa ? idDaUltimaTarefa.id + 1 : 1
        }
        state.itens.push(novaTarefa)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, salvarEdicao, cadastrar, alteraStatus } =
  tarefaSlice.actions
export default tarefaSlice.reducer
