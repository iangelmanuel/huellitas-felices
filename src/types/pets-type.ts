export interface IPets {
  id: number
  nombre: string
  categoria: "Perro" | "Gato"
  raza: string
  edad: string
  sexo: "Macho" | "Hembra"
  tamano: "Pequeño" | "Mediano" | "Grande"
  vacunas: string | "No requiere"
  esterilizacion: string | "No requiere"
  enfermedades: string | "No tiene"
  necesidades: string | "No requiere"
  descripcion: string,
  slug: string
  imagen: string
}
