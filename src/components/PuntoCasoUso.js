import React from 'react'
import IngresarCasoUso from '@/caso-uso/IngresarCasoUso'
import Factores from '@/caso-uso/Factores'
import Modal from './commons/Modal'
import { calcularPesoActores, calcularPesoTransacciones, calcularFactoresAmbientales, calcularFactoresTecnicos, calcularTcf, calcularEcf } from '@/caso-uso/calcs'
import { useBoundStore } from '@/store/boundStore'

const PuntoCasoUso = () => {

  const { nombre, descripcion, actores, transacciones, tecnicos, ambientales } = useBoundStore();
  const [showResult, setShowResult] = React.useState(false)

  const auw = calcularPesoActores(actores);
  const uucw = calcularPesoTransacciones(transacciones);
  const factoresTecnicos = calcularFactoresTecnicos(tecnicos);
  const factoresAmbientales = calcularFactoresAmbientales(ambientales);

  const tcf = calcularTcf(factoresTecnicos);
  const ef = calcularEcf(factoresAmbientales);

  const uucp = auw + uucw;
  const ucp = uucp * tcf * ef;
  const horasHombre = ucp * 20;
  return (


    <div className='flex flex-col gap-2 m-2'>
      <IngresarCasoUso />
      <Factores />
      <Modal show={showResult} >
        <div className='flex flex-col items-center gap-2 '>
          <h1 className='text-2xl'>Resultado</h1>

          <div className="grid w-full h-full grid-cols-4 gap-4 p-4 border">
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center">
              <p className='text-xl font-bold'>Actores (AUW)</p>
              <p className='text-4xl'>{auw}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center">
              <p className='text-xl font-bold'>Casos de uso (UUCW)</p>
              <p className='text-4xl'>{uucw}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center">
              <p className='text-xl font-bold'>Factores Tecnicos (TCF)</p>
              <p className='text-4xl'> {factoresTecnicos}</p>
              <p className='text-2xl'> ({Math.round(tcf * 100) / 100})</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center">
              <p className='text-xl font-bold'>Factores Ambientales (EF)</p>
              <p className='text-4xl'>{factoresAmbientales}</p>
              <p className='text-2xl'> ({Math.round(ef * 100) / 100})</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center col-span-2">
              <p className='text-xl font-bold'>Casos de uso no ajustados(UUCP)</p>
              <p className='text-4xl'>{uucp}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center col-span-2">
              <p className='text-xl font-bold'>Casos de uso ajustados a factores (UCP)</p>
              <p className='text-4xl'>{Math.round(ucp * 100) / 100}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center col-span-4">
              <p className='text-xl font-bold'>Horas - Hombre</p>
              <p className='text-4xl'>{horasHombre}</p>
            </div>
          </div>
          <button className='p-2 text-white bg-blue-400 rounded-md' onClick={() => setShowResult(false)}>Cerrar</button>
        </div>
      </Modal>
      <button className='w-full p-2 text-white bg-blue-400 rounded-md' onClick={() => setShowResult(true)}> Calcular</button>
    </div>
  )
}

export default PuntoCasoUso