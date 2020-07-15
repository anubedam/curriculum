export interface DatosCursosWeb{
    // La interrogacion es opcional, para que deje crear objeto vacio
    BBDD?: String[];
    IDE?: String[];   
    categorias?: Categoria[];    
}

interface Categoria{
    nombre: String;
    cursos: Curso[];
}

interface Curso{
    nombre: String;
    duracion: number;
    empresa: String;
    modalidad: String;
}