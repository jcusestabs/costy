import React from 'react';
import { useBoundStore } from '@/store/boundStore';
import { requerimiento } from '@/punto-funcion-ajustado/data'
import { calculateFunctionPointsForRequirement } from './calcs';

const IngresarRequerimiento = () => {

    const { complejidades, tipoRequerimientos } = requerimiento;

    const { nombre, complejidad, tipoRequerimiento } = useBoundStore();
    const updateComplejidad = useBoundStore((state) => state.updateComplejidad);
    const updateTipoRequerimiento = useBoundStore((state) => state.updateTipoRequerimiento);
    const updateNombre = useBoundStore((state) => state.updateNombre);
    const addRequerimiento = useBoundStore((state) => state.addRequerimiento);

    const handleCreateRequirement = () => {
        if (complejidad && tipoRequerimiento) {
            const indexOfComplejidad = complejidades.indexOf(complejidad);
            const functionsPoint = calculateFunctionPointsForRequirement(tipoRequerimiento, indexOfComplejidad);
            addRequerimiento({
                nombre,
                complejidad,
                tipoRequerimiento,
                functionsPoint
            });
        }
    };

    return (
        <div className="flex flex-col gap-2 p-4 border">
            <h3 className="text-2xl">Ingresar Requerimiento</h3>
            <div className="flex w-full gap-4">
                <p className="font-bold">Nombre: </p>
                <input type="text" value={nombre} onChange={(e) => updateNombre(e.target.value)} className="flex-grow border rounded-md" />
                <button className="px-2 text-white bg-blue-500 rounded-md" onClick={handleCreateRequirement}>
                    Añadir Requerimiento
                </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2 p-2 border rounded-md">
                    <p className="text-xl">Tipo de Requerimiento</p>
                    <table className="border table-auto">
                        <thead className="bg-blue-200">
                            <tr>
                                <th className="text-left p-2">Nombre</th>
                                <th className="text-left p-2">Descripcion</th>
                                <th className="text-left p-2">Tipo</th>
                                <th className="text-left p-2">Seleccion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(tipoRequerimientos).map((t, i) => (
                                <tr key={i}>
                                    <td className="p-2">{tipoRequerimientos[t].nombre}</td>
                                    <td className="p-2">{tipoRequerimientos[t].descripcion}</td>
                                    <td className="p-2">{tipoRequerimientos[t].tipo}</td>
                                    <td className="p-2">
                                        <div className="flex justify-center items-center">
                                            <input type="radio" name="tipoRequerimiento" value={t} onChange={(e) => updateTipoRequerimiento(tipoRequerimientos[e.target.value])} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-2 p-2 border rounded-md">
                    <p className="text-xl">Complejidad de Requerimiento</p>
                    <table className="border table-auto">
                        <thead className="bg-blue-200">
                            <tr>
                                <th className="text-left p-2">Descripcion</th>
                                <th className="text-center p-2">Seleccion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {complejidades.map((c, i) => (
                                <tr key={i}>
                                    <td className="p-2">{c}</td>
                                    <td className="p-2">
                                        <div className="flex justify-center items-center">
                                            <input type="radio" name="complejidad" value={c}  onChange={(e) => updateComplejidad(e.target.value)} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default IngresarRequerimiento;