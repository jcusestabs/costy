import MenuTab from "@/components/commons/MenuTab";
import PuntoObjeto from "@/components/PuntoObjeto";
import PuntoCasoUso from "@/components/PuntoCasoUso";
import PuntoFuncion from "@/components/PuntoFuncion";
import PuntoCosmos from "@/components/PuntoCosmos";
import McCall from "@/components/McCall";

import { useMemo, useState } from "react";

const router = [
  {
    id: 0,
    title: "Punto de Funcion Ajustado",
    Target: PuntoFuncion,
  },
  {
    id: 1,
    title: "Punto de Caso-Uso",
    Target: PuntoCasoUso,
  },
  {
    id: 2,
    title: "Punto de Objeto",
    Target: PuntoObjeto,
  },
  {
    id: 3,
    title: "Puntos Cosmos",
    Target: PuntoCosmos,
  },
  {
    id: 4,
    title: "Analisis McCall",
    Target: McCall,
  },
]

export default function Home() {

  const [selectedTab, setSelectedTab] = useState(0);
  const { Target } = useMemo(() => {
    return router[selectedTab]
  }, [selectedTab]);


  return <div className="flex flex-col items-center flex-1 w-full h-screen">
    <div className="flex flex-col w-3/4 h-full gap-2">
      <div className="flex flex-col gap-2 pt-8">
        <h1 className="text-3xl">Analisis de Costos</h1>
        <div className="w-full p-4 leading-8 bg-blue-100 border-4 border-blue-300">
          <p className="font-bold">Analisis de costos</p>
          <p>Ingresar aqui descripcion de metodo usado</p>
        </div>
      </div>
      <div className="grid grid-cols-5 ">
        {router.map((item) => {
          return <MenuTab key={item.id} selected={item.id === selectedTab} onClick={() => setSelectedTab(item.id)}>{item.title}</MenuTab>
        })}
      </div>
      <div>
        <Target />
      </div>
    </div>
  </div>;
}
