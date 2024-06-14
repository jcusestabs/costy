import React, { useState } from 'react'
import Modal from './commons/Modal'
import { useBoundStore } from '@/store/boundStore'

const PuntoCasoUso = () => {

  const [descripcion, setDescripcion] = useState('')
  const [tipo, setTipo] = useState()

  const { requerimientos } = useBoundStore();
  const agregarPunto = useBoundStore((state) => state.agregarPunto);
  const eliminarPunto = useBoundStore((state) => state.eliminarPunto);


  const [showResult, setShowResult] = React.useState(false)

  const handleAdd = () => {
    agregarPunto({ descripcion, tipo })
    setDescripcion('')
    setTipo('entrada')
  }

  const puntos = requerimientos.length;
  const totalEntradas = requerimientos.filter(i => i.tipo === 'entrada').length;
  const totalSalidas = requerimientos.filter(i => i.tipo === 'salida').length;
  const totalConsultas = requerimientos.filter(i => i.tipo === 'lectura').length;

  return (
    <div className='flex flex-col gap-2 m-2'>
      <div className="flex items-center justify-center w-full gap-4 p-4 border rounded-md">
        <p className=''> Punto de funcion: </p>
        <input type="text" placeholder={'descripcion'} className='w-1/3 p-2 border rounded-md' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        <p>Tipo: </p>
        <select name="tipo de dato" id="tipo-dato" className='p-2 rounded-md outline-none' onChange={(e) => setTipo(e.target.value)} value={tipo} defaultValue={"entrada"}>
          <option value="entrada" className='p-4 bg-white border outline-none'>Entrada de datos</option>
          <option value="salida" className='p-4 bg-white border outline-none'>Salida de datos</option>
          <option value="lectura" className='p-4 bg-white border outline-none'>Lectura de datos</option>
        </select>
        <button className='p-2 text-white bg-blue-400 rounded-md ' onClick={handleAdd}> Agregar</button>

      </div>
      <table className='w-full'>
        <thead>
          <tr className='text-left bg-blue-200'>
            <th className='p-2'>Descripcion</th>
            <th className='p-2'>Tipo</th>
            <th className='p-2'>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {requerimientos.map((requerimiento, index) => (
            <tr key={index} className='border'>
              <td className='p-2'>{requerimiento.descripcion}</td>
              <td className='p-2'>{requerimiento.tipo}</td>
              <td className='p-2'>
                <button className='p-2 text-white bg-red-400 rounded-md' onClick={() => eliminarPunto(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showResult} >
        <div className='flex flex-col items-center gap-2 '>
          <h1 className='text-2xl'>Resultado</h1>

          <div className="grid w-full h-full grid-cols-3 gap-4 p-4 border">
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center">
              <p className='text-xl font-bold'>Puntos de entrada</p>
              <p className='text-4xl'>{totalEntradas}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center">
              <p className='text-xl font-bold'>Puntos de salida</p>
              <p className='text-4xl'>{totalSalidas}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center">
              <p className='text-xl font-bold'>Puntos de consulta</p>
              <p className='text-4xl'>{totalConsultas}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center col-span-3">
              <p className='text-xl font-bold'>Total Puntos Cosmic</p>
              <p className='text-4xl'>{totalEntradas + totalSalidas + totalConsultas}</p>
            </div>

          </div>
          <button className='p-2 text-white bg-blue-400 rounded-md' onClick={() => setShowResult(false)}>Cerrar</button>
        </div>
      </Modal >
      <button className='w-full p-2 text-white bg-blue-400 rounded-md' onClick={() => setShowResult(true)}> Calcular</button>
    </div >
  )
}

export default PuntoCasoUso