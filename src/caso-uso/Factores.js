import React from 'react'
import { useCasouso } from '@/store/casoUso'
import { factoresTecnicos, factoresAmbientales } from '@/caso-uso/data'

const Factores = () => {
  const { tecnicos, ambientales } = useCasouso()
  const updateTecnicos = useCasouso((state) => state.updateTecnicos)
  const updateAmbientales = useCasouso((state) => state.updateAmbientales)



  return (
    <div className='grid w-full grid-cols-2 gap-2 '>
      <div className="flex flex-col gap-2 p-4 border rounded-md ">
        <h3 className='text-xl'>Factores Tecnicos</h3>

        <table>
          <thead className='text-left bg-blue-200'>
            <tr>
              <th>Descripcion</th>
              <th>Peso</th>
            </tr>
          </thead>
          <tbody>
            {factoresTecnicos.descripciones.map((descripcion, index) => {
              return (
                <tr key={index}>
                  <td>{descripcion}</td>
                  <input type="number" min={0} max={5} className='w-full text-center bg-gray-100' value={tecnicos[index]} onChange={(e) => updateTecnicos(index, e.target.value)} />
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-2 p-4 border rounded-md ">
        <h3 className='text-xl'>Factores Ambientales</h3>

        <table>
          <thead className='text-left bg-blue-200'>
            <tr>
              <th>Descripcion</th>
              <th>Peso</th>
            </tr>
          </thead>
          <tbody>
            {factoresAmbientales.descripciones.map((descripcion, index) => {
              return (
                <tr key={index}>
                  <td>{descripcion}</td>
                  <input type="number" min={0} max={5} className='w-full text-center bg-gray-100' value={ambientales[index]} onChange={(e) => updateAmbientales(index, e.target.value)} />
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Factores