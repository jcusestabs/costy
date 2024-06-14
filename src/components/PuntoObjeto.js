import React from 'react'
import Modal from './commons/Modal';

const PuntoObjeto = () => {
  const [showResult, setShowResult] = React.useState(false)

  return (
    <div className='flex flex-col gap-2 m-2'>
      <div className="flex items-center justify-center w-full gap-4 p-4 border rounded-md">
      <h3 className="text-2xl">Determinar la Cantidad de Objetos</h3>
      </div>
      <table className="border table-auto w-full">
        <thead className="bg-blue-200">
          <tr>
            <th className="text-left p-2">Objetos</th>
            <th className="text-left p-2">Cantidad</th>
            <th className="text-left p-2">Complejidad</th>
            <th className="text-left p-2">Peso</th>
            <th className="text-left p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {["Pantallas", "Reportes", "Componentes 3GL"].map((objeto, index) => (
            <tr key={index}>
              <td className="p-2">{objeto}</td>
              <td className="p-2">
                <input type="number" className="p-2 border rounded-md" />
              </td>
              <td className="p-2">
                <select name="complejidad" id="complejidad" className="p-2 border rounded-md">
                  <option value="baja">Baja</option>
                  <option value="media">Media</option>
                  <option value="alta">Alta</option>
                </select>
              </td>
              <td className="p-2">
                <input type="number" className="p-2 border rounded-md" />
              </td>
              <td className="p-2">
                <input type="number" className="p-2 border rounded-md" />
              </td>
            </tr>
          ))}
      </tbody>
      </table>
      <Modal show={showResult} onClose={() => setShowResult(false)}>
        <div className='flex flex-col items-center gap-2 '>
          <h1 className='text-2xl'>Resultado</h1>
          <div className="grid w-full h-full grid-cols-3 gap-4 p-4 border">
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center">
              <p className='text-xl font-bold'>Puntos de Objeto</p>
              <p className='text-4xl'>{}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center">
              <p className='text-xl font-bold'>Hora Hombre</p>
              <p className='text-4xl'>{}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center">
              <p className='text-xl font-bold'>Dias Hombre</p>
              <p className='text-4xl'>{}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center col-span-3">
              <p className='text-xl font-bold'>Meses Hombre</p>
              <p className='text-4xl'>{}</p>
            </div>

          </div>
          <button className='p-2 text-white bg-blue-400 rounded-md' onClick={() => setShowResult(false)}>Cerrar</button>
        </div>
      </Modal>
      <button className='w-full p-2 text-white bg-blue-400 rounded-md' onClick={() => setShowResult(true)}> Calcular</button>
   </div>
  )
}

export default PuntoObjeto;