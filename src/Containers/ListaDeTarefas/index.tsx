import Tarefa from '../../componentes/Tarefa'
import { MainContainer, Titulo } from '../../styles'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import ButtonAdicionar from '../../componentes/ButtonAdicionar'

// const Tarefas = [
//   {
//     titulo: 'Assistir o novo módulo do curso',
//     descricao: 'Fazer a tarefa da aula 05 e 07 de Banco de Dados',
//     status: enums.Status.PENDENTE,
//     prioridade: enums.Prioridade.IMPORTANTE
//   },
//   {
//     titulo: 'Pagar o cartão',
//     descricao: 'Baixar a fatura e pagar o boleto',
//     status: enums.Status.CONCLUIDA,
//     prioridade: enums.Prioridade.URGENTE
//   },
//   {
//     titulo: 'Ir treinar',
//     descricao: 'Fazer o treino E do personal',
//     status: enums.Status.PENDENTE,
//     prioridade: enums.Prioridade.IMPORTANTE
//   }
// ]

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  function retornaTarefas() {
    let tarefasFiltradas = itens

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (t) =>
          t.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (t) => t.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter((t) => t.status === valor)
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }
  const tarefas = retornaTarefas()
  let message = ``
  const complemento =
    termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ``

  const exibeResultadoFiltragem = (quantidade: number) => {
    if (criterio === 'todas') {
      message = `${tarefas.length} tarefa(s) marcada(s) como: "${criterio}"${complemento}`
    } else {
      message = `${tarefas.length} tarefa(s) marcada(s) como: "${criterio}=${valor}"${complemento}`
    }
    return message
  }

  const menssagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{menssagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
      <ButtonAdicionar />
    </MainContainer>
  )
}
export default ListaDeTarefas
