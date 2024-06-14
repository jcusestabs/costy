import React from "react";
import { useBoundStore } from '../store/boundStore';

const IngresarCasoUso = () => {

  const { nombre, descripcion, actores, transacciones } = useBoundStore();
  const updateActores = useBoundStore((state) => state.updateActores);
  const addTransaccion = useBoundStore((state) => state.addTransaccion);
  const eliminarTransaccion = useBoundStore((state) => state.eliminarTransaccion);
  const updateNombre = useBoundStore((state) => state.updateNombre);
  const updateDescripcion = useBoundStore((state) => state.updateDescripcion);

  const [descriptionTransaccion, setDescriptionTransaccion] = React.useState('');
  const [numeroTransacciones, setNumeroTransacciones] = React.useState(0);

  const handleChangeActores = (tipo) => (e) => {
    const valor = e.target.value;
    updateActores(tipo, valor);
  }

  const handleAddTransaccion = () => {
    addTransaccion({
      descripcion: descriptionTransaccion,
      numero: Number(numeroTransacciones)
    });

    setDescriptionTransaccion('');
    setNumeroTransacciones(0);
  }

  const handleRemoveTransaccion = (index) => () => {
    eliminarTransaccion(index);
  }

  return (
    <div className="flex flex-col gap-2 p-4 border ">
      <h3 className="text-2xl">Resumen de Programa</h3>
        <div className="flex w-full gap-4 ">
          <p className="font-bold">Nombre: </p>
        <input type="text" value={nombre} onChange={(e) => updateNombre(e.target.value)} className="flex-grow border rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold">Descripcion: </p>
        <textarea className="w-full border rounded-md" value={descripcion} onChange={(e) => updateDescripcion(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2 p-2 border rounded-md">
            <p className="text-xl">Actores</p>
            <table className="border table-auto">
            <thead className="bg-blue-200">
                <tr>


                  <th className="text-left">Nombre</th>
                  <th className="text-left">Descripcion</th>
                  <th className="text-left">Tipo</th>
                </tr>
              </thead>
              <tbody >
                <tr>
                  <td>Simple</td>
                <td className="px-2">Interactuo con API?</td>
                  <td>
                  <input value={actores.simple} onChange={handleChangeActores('simple')} type="number" className="w-full text-center bg-gray-100 " min={0} max={1000} />
                  </td>
                </tr>
                <tr>
                  <td>Medio</td>
                <td className="px-2">Interactuo con lineas de comando?</td>

                <input value={actores.medio} onChange={handleChangeActores('medio')} type="number" className="w-full text-center bg-gray-100 " min={0} max={1000} />

                </tr>
                <tr>
                  <td>Complejo</td>
                <td className="px-2">Cuantos usuarios interactuando?</td>
                <input value={actores.complejo} onChange={handleChangeActores('complejo')} type="number" className="w-full text-center bg-gray-100 " min={0} max={1000} />
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-2 p-2 border rounded-md">
            <p className="text-xl">Transacciones</p>

          <div className="flex flex-col items-start gap-2">
            <div className="flex gap-2">
              <p className="font-bold">Descripcion:  </p>
              <input type="text" className="flex-grow border rounded-md" value={descriptionTransaccion} onChange={(e) => setDescriptionTransaccion(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <p className="font-bold">Numero de transacciones:  </p>
              <input type="number" className="flex-grow border rounded-md" value={numeroTransacciones} onChange={e => setNumeroTransacciones(e.target.value)} min={0} max={1000} />
            </div>
            <button onClick={handleAddTransaccion} className="px-2 text-white bg-blue-500 rounded-md">Agregar</button>
          </div>

          <table className="border table-auto">
            <thead className="bg-blue-200">
              <tr>
                <th className="px-2 text-left">Descripcion</th>
                <th className="px-2 text-left">No. de transacciones</th>
                <th className="px-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody  >

              {transacciones.map((transaccion, index) => (
                <tr key={index}>
                  <td className="p-2">{transaccion.descripcion}</td>
                  <td className="p-2">{transaccion.numero}</td>
                  <td className="p-2">
                    <button className="px-2 text-white bg-red-500 rounded-md" onClick={handleRemoveTransaccion(index)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );

};

export default IngresarCasoUso;
