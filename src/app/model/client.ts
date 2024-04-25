export interface Client {
  personas: Persona[]
}

export interface Persona {
  nombre: string
  dni: string
  email: string
  fechaNacimiento: string
  fotografia: string
}
