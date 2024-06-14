export const usePuntoDeFuncion = ((set) => ({

    nombre: '',
    tipoRequerimiento : {},
    complejidad : '',
    arrayRequerimientos : [],
    ajuste: [0,0,0,0,0,0,0,0,0,0,0,0,0],

    updateNombre : (nombre) => set({ nombre }),
    updateComplejidad: (complejidad) => set({ complejidad : complejidad }),
    updateTipoRequerimiento: (tipoRequerimiento) => set({ tipoRequerimiento : tipoRequerimiento }),
    
    addRequerimiento: (requerimiento) => set((state) => ({
        arrayRequerimientos: [...state.arrayRequerimientos, requerimiento]
    })),

    eliminarRequerimiento: (index) => set((state) => ({
        arrayRequerimientos: state.arrayRequerimientos.filter((_, i) => i !== index)
    })),

    updateRequerimiento: (index, requerimiento) => set((state) => ({
        arrayRequerimientos: state.arrayRequerimientos.map((r, i) => i === index ? requerimiento : r)
    })),

    updateAjuste: (index, valor) => set((state) => ({
        ajuste: state.ajuste.map((t, i) => i === index ? valor : t)
    })),

}));