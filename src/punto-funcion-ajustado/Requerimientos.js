import React from 'react';
import { usePuntoDeFuncion } from '@/store/puntoDeFuncion';

const Requerimientos = () => {
    const { arrayRequerimientos } = usePuntoDeFuncion();
    return (
        <div className="flex flex-col gap-2 p-4 border rounded-md">
            <h3 className="text-2xl">Requerimientos</h3>
            <table className="border table-auto">
                <thead className="bg-blue-200">
                    <tr>
                        <th className="text-left p-2">Nombre</th>
                        <th className="text-left p-2">Complejidad</th>
                        <th className="text-left p-2">Tipo de Requerimiento</th>
                        <th className="text-left p-2">Puntos de Funcion</th>
                    </tr>
                </thead>
                <tbody>
                    {arrayRequerimientos.map((r, i) => (
                        <tr key={i}>
                            <td className="p-2">{r.nombre}</td>
                            <td className="p-2">{r.complejidad}</td>
                            <td className="p-2">{r.tipoRequerimiento.nombre}</td>
                            <td className="p-2">{r.functionsPoint}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Requerimientos;
