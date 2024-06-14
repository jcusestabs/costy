import { create } from "zustand";

export const usePuntoCosmos = create((set) => ({
  requerimientos: [],

  agregarPunto: (punto) => set((state) => ({ requerimientos: [...state.requerimientos, punto] })),
  eliminarPunto: (index) => set((state) => ({ requerimientos: state.requerimientos.filter((_, i) => i !== index) })),
}));