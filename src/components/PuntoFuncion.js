import React from 'react'
import IngresarRequerimiento from '@/punto-funcion-ajustado/IngresarRequerimiento'
import FactoresPF from '@/punto-funcion-ajustado/Factores'
import Requerimientos from '@/punto-funcion-ajustado/Requerimientos'
import Modal from './commons/Modal'
import { useBoundStore } from '@/store/boundStore'
import { calculateFunctionPoints, calculateAdjustmentPoints, calculateUFP } from '@/punto-funcion-ajustado/calcs'

const PuntoFuncion = () => {

  const [showResult, setShowResult] = React.useState(false)
  const { arrayRequerimientos, ajuste } = useBoundStore();

  const funcionPoints = calculateFunctionPoints(arrayRequerimientos);
  const adjustmentPoints = calculateAdjustmentPoints(ajuste);
  const ufp = calculateUFP(funcionPoints, adjustmentPoints);

  return (
    <div className='flex flex-col gap-2 m-2'>
      <IngresarRequerimiento />
      { arrayRequerimientos.length > 0 && 
      <>
        <div className="grid w-full grid-cols-2 gap-2 p-4">
          <Requerimientos />
          <FactoresPF />
        </div>
        <Modal show={showResult} >
          <div className='flex flex-col items-center gap-2 '>
            <h1 className='text-2xl'>Resultado</h1>
            <div className="grid w-full h-full grid-cols-4 gap-4 p-4 border">
              <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center col-span-2">
                <p className='text-xl font-bold'>Puntos de Funcion sin Ajustar (PFSA)</p>
                <p className='text-4xl'>{funcionPoints}</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center col-span-2">
                <p className='text-xl font-bold'>Factor de Ajuste (FA)</p>
                <p className='text-4xl'>{adjustmentPoints}</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center col-span-4">
                <p className='text-xl font-bold'>Puntos de Funcion Ajustados (PFA)</p>
                <p className='text-4xl'>{Math.ceil(ufp)}</p>
              </div>  
            </div>
            <button className='p-2 text-white bg-blue-400 rounded-md' onClick={() => setShowResult(false)}>Cerrar</button>
          </div>
        </Modal>
        <button className='w-full p-2 text-white bg-blue-400 rounded-md' onClick={() => setShowResult(true)}> Calcular</button>
      </>
      }
    </div>
  )
}

export default PuntoFuncion