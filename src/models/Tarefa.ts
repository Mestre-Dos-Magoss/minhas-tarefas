import * as enums from '../Utils/Enums'

class Tarefa {
  id: number
  titulo: string
  descricao: string
  prioridade: enums.Prioridade
  status: enums.Status

  constructor(
    id: number,
    titulo: string,
    descricao: string,
    prioridade: enums.Prioridade,
    status: enums.Status
  ) {
    this.id = id
    this.titulo = titulo
    this.descricao = descricao
    this.prioridade = prioridade
    this.status = status
  }
}

export default Tarefa
