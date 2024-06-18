export const usePuntoObjecto = ((set) => ({

    cantidades: [0, 0, 0],
    complejidades: ['baja', 'baja', 'baja'],
    pesos: [0, 0, 10],
    totalesObjetos: [0, 0, 0],

    updateCantidad: (index, cantidad) => set((state) => ({
        cantidades: state.cantidades.map((c, i) => i === index ? cantidad : c)
    })),

    updateComplejidad: (index, complejidad) => set((state) => ({
        complejidades: state.complejidades.map((c, i) => i === index ? complejidad : c)
    })),

    updatePeso: (index, peso) => set((state) => ({
        pesos: state.pesos.map((c, i) => i === index ? peso : c)
    })),
    
    updateTotalObjetos: (index, total) => set((state) => ({
        totalesObjetos: state.totalesObjetos.map((c, i) => i === index ? total : c)
    }))

}));