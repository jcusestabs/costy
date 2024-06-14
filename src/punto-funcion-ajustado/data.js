export const requerimiento = {
    tipoRequerimientos : {
        EI:{
            nombre: "Entrada Interna",
            descripcion: "Entrada de datos que llega a la aplicacion",
            tipo: "Primario",
            complejidades: [3, 4, 6],
        },
        EO:{
            nombre: "Salida Externa",
            descripcion: "Salida de datos que sale de la aplicacion",
            tipo: "Primario",
            complejidades: [4, 5, 7],
        },
        EQ:{
            nombre: "Consulta Externa",
            descripcion: "Consulta a la base de datos",
            tipo: "Primario",
            complejidades: [3, 4, 6],
        },
        ILF:{
            nombre: "Archivo Logico Interno",
            descripcion: "Archivo de datos de la aplicacion",
            tipo: "Secundario",
            complejidades: [7, 10, 15],
        },
        EIF:{
            nombre: "Archivo de Interfaz Externa",
            descripcion: "Archivo de datos de otra aplicacion",
            tipo: "Secundario",
            complejidades: [5, 7, 10],
        }
    },
    complejidades : ["Baja", "Media", "Alta"],
};

export const factoresDeAjuste = {
    descripciones: [
        'Comunicación de Datos',
        'Procesos Distribuidos',
        'Rendimiento',
        'Capacidad',
        'Reusabilidad',
        'Facilidad de Instalación',
        'Facilidad de Uso',
        'Portabilidad',
        'Facilidad de Cambio',
        'Concurrencia',
        'Seguridad',
        'Acceso a Terceros',
        'Entrenamiento de Usuarios',
    ],

    puntajes: [2, 1, 1, 1, 1, 0.5, 0.5, 2, 1, 1, 1, 1, 1,]
}