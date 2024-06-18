import React from 'react';
import Modal from './commons/Modal';
import { useBoundStore } from '@/store/boundStore';

const PuntoObjeto = () => {
  const [showResult, setShowResult] = React.useState(false);

  const {
    cantidades,
    complejidades,
    pesos,
    totalesObjetos,
    updateCantidad,
    updateComplejidad,
    updatePeso,
    updateTotalObjetos
  } = useBoundStore((state) => ({
    cantidades: state.cantidades,
    complejidades: state.complejidades,
    pesos: state.pesos,
    totalesObjetos: state.totalesObjetos,
    updateCantidad: state.updateCantidad,
    updateComplejidad: state.updateComplejidad,
    updatePeso: state.updatePeso,
    updateTotalObjetos: state.updateTotalObjetos
  }));

  const calcularTotalPuntosObjeto = () => {
    return totalesObjetos.map(value => Number(value))
    .filter(value => !isNaN(value))
    .reduce((acc, adj) => acc + adj, 0);
  };

  const calcularHorasHombre = () => {
    return calcularTotalPuntosObjeto() * 0.01;
  };

  const calcularDiasHombre = () => {
    return calcularHorasHombre() / 8;
  };

  const calcularMesesHombre = () => {
    return calcularDiasHombre() / 22;
  };

  React.useEffect(() => {
    const handleUpdateTotal = () => {
      const total = cantidades.map((cantidad, index) => {
        const peso = pesos[index];
        const complejidad = complejidades[index];
        let factor = 0;
        switch (complejidad) {
          case 'baja':
            factor = 1;
            break;
          case 'media':
            factor = 2;
            break;
          case 'alta':
            factor = 3;
            break;
          default:
            factor = 1;
            break;
        }
        return cantidad * peso * factor;
      });
      total.forEach((t, index) => {
        updateTotalObjetos(index, t);
      });
    };

    handleUpdateTotal();
  }, [cantidades, complejidades, pesos, updateTotalObjetos]);

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
                <input
                  type="number"
                  className="p-2 border rounded-md"
                  min={0}
                  value={cantidades[index]}
                  onChange={(e) => updateCantidad(index, Number(e.target.value))}
                />
              </td>
              <td className="p-2">
                <select
                  name="complejidad"
                  id="complejidad"
                  className="p-2 border rounded-md"
                  onChange={(e) => updateComplejidad(index, e.target.value)}
                  value={complejidades[index]}
                >
                  <option value="baja">Baja</option>
                  <option value="media">Media</option>
                  <option value="alta">Alta</option>
                </select>
              </td>
              <td className="p-2">
                {pesos[index] === 10 ? (
                  <input
                    type="number"
                    className="p-2 border rounded-md"
                    min={0}
                    value={pesos[index]}
                    readOnly
                  />
                ) : (
                  <input
                    type="number"
                    className="p-2 border rounded-md"
                    min={0}
                    value={pesos[index]}
                    onChange={(e) => updatePeso(index, Number(e.target.value))}
                  />
                )}
              </td>
              <td className="p-2">
                <input
                  type="number"
                  className="p-2 border rounded-md"
                  value={totalesObjetos[index]}
                  readOnly
                />
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
              <p className='text-4xl'>{calcularTotalPuntosObjeto()}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center">
              <p className='text-xl font-bold'>Hora Hombre</p>
              <p className='text-4xl'>{calcularHorasHombre()}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center">
              <p className='text-xl font-bold'>Dias Hombre</p>
              <p className='text-4xl'>{calcularDiasHombre()}</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 border rounded-lg h-[150px] p-2 text-center col-span-3">
              <p className='text-xl font-bold'>Meses Hombre</p>
              <p className='text-4xl'>{calcularMesesHombre()}</p>
            </div>
          </div>
          <button className='p-2 text-white bg-blue-400 rounded-md' onClick={() => setShowResult(false)}>Cerrar</button>
        </div>
      </Modal>
      <button className='w-full p-2 text-white bg-blue-400 rounded-md' onClick={() => setShowResult(true)}> Calcular</button>
    </div>
  );
};

export default PuntoObjeto;
