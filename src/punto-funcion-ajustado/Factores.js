import React from 'react';
import { usePuntoDeFuncion } from '@/store/puntoDeFuncion';
import { factoresDeAjuste } from './data';

const FactoresPF = () => {

    const { ajuste } = usePuntoDeFuncion();
    const updateAjuste = usePuntoDeFuncion(state => state.updateAjuste);

  return (
    <div className="flex flex-col gap-2 p-4 border rounded-md">
        <h3 className="text-xl">Factor de Ajuste</h3>
        <table>
            <thead className="text-left bg-blue-200">
                <tr>
                    <th>Descripcion</th>
                    <th>Puntaje</th>
                </tr>
            </thead>
            <tbody>
                {factoresDeAjuste.descripciones.map((descripcion, index) => {
                    return (
                        <tr key={index}>
                            <td>{descripcion}</td>
                            <input type="number" min={0} max={5} className="w-full text-center bg-gray-100" value={ajuste[index]} onChange={(e) => updateAjuste(index, e.target.value)} />
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  )
}

export default FactoresPF;