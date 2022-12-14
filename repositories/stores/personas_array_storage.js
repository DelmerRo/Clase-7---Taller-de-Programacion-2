import { Persona } from "../../models/persona.js"

export class PersonasArrayStorage {
  constructor() {
    this.personas = [new Persona("345vcddd", "Javier")]
  }

  guardar(persona) {
    this.personas.push(persona)
  }

  buscarTodos() {
    return this.personas
  }

  buscarUno(identificador) {
    return this.personas.find(elemento => elemento.id == identificador)
  }

  eliminar(identificador) {
    this.personas = this.personas.filter(elemento => elemento.id != identificador)
  }
}
