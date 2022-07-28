class Alumnos{
    alumnos=[]
    constructor(){

    }
    agregarAlumno(alumno){
        this.alumnos=[...this.alumnos,alumno]
    }
    listarTodos(){
        return this.alumnos
    }
}
let alumnosCurso=new Alumnos()
alumnosCurso.agregarAlumno({nombre:"Alejandro",apellido:"Navas"})
alumnosCurso.agregarAlumno({nombre:"Alejandra",apellido:"Perez"})
alumnosCurso.agregarAlumno({nombre:"Julían",apellido:"Oropeza"})
let alumnoCarrera = new Alumnos()
alumnoCarrera.agregarAlumno({nombre:"Juan",apellido:"Navas"})
alumnoCarrera.agregarAlumno({nombre:"Patricia",apellido:"Perez"})
alumnoCarrera.agregarAlumno({nombre:"Juliana",apellido:"Oropeza"})
console.log(alumnosCurso.listarTodos());
console.log(alumnoCarrera.listarTodos());