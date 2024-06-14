import { create } from "zustand";
import { useCasouso } from "./casoUso";
import { usePuntoDeFuncion } from "./puntoDeFuncion";
import { usePuntoCosmos } from "./puntoCosmos";

export const useBoundStore = create((set) => ({
    ...useCasouso(set),
    ...usePuntoDeFuncion(set),
    ...usePuntoCosmos(set),
}))
    