export const usePuntoCosmos = ((set) => ({
  requerimientos: [],

  agregarPunto: (punto) => set((state) => ({ requerimientos: [...state.requerimientos, punto] })),
  eliminarPunto: (index) => set((state) => ({ requerimientos: state.requerimientos.filter((_, i) => i !== index) })),
}));