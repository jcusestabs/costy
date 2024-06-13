import { factoresTecnicos, factoresAmbientales } from "./data";
export const calcularPesoActores = (actores) => actores.simple * 1 + actores.medio * 2 + actores.complejo * 3;
export const calcularPesoTransacciones = (transacciones) => transacciones.reduce((acc, t) => {
  const numero = parseInt(t.numero);
  return acc + (numero <= 3 ? 5 : numero <= 7 ? 10 : 15);
}, 0)
export const calcularFactoresTecnicos = (factores) => factores.reduce((acc, f, i) => acc + f * factoresTecnicos.pesos[i], 0);
export const calcularFactoresAmbientales = (factores) => factores.reduce((acc, f, i) => acc + f * factoresAmbientales.pesos[i], 0);

export const calcularTcf = (factoresTecnicos) => 0.6 + (0.01 * factoresTecnicos);
export const calcularEcf = (factoresAmbientales) => 1.4 + (-0.03 * factoresAmbientales);