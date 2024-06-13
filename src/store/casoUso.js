import { create } from "zustand";

export const useCasouso = create((set) => ({
  nombre: '',
  descripcion: '',
  actores: {
    simple: 0,
    medio: 0,
    complejo: 0,
  },
  transacciones: [],
  tecnicos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ambientales: [0, 0, 0, 0, 0, 0, 0, 0],

  updateNombre: (nombre) => set({ nombre }),
  updateDescripcion: (descripcion) => set({ descripcion }),

  updateActores: (tipo, valor) => set((state) => ({
    actores: {
      ...state.actores,
      [tipo]: valor,
    }
  })),

  addTransaccion: (transaccion) => set((state) => ({
    transacciones: [...state.transacciones, transaccion]
  })),

  eliminarTransaccion: (index) => set((state) => ({
    transacciones: state.transacciones.filter((_, i) => i !== index)
  })),

  updateTecnicos: (index, valor) => set((state) => ({
    tecnicos: state.tecnicos.map((t, i) => i === index ? valor : t)
  })),

  updateAmbientales: (index, valor) => set((state) => ({
    ambientales: state.ambientales.map((t, i) => i === index ? valor : t)
  })),

}));