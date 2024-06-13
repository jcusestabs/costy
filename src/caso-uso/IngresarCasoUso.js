import React from "react";
import Modal from "@/components/commons/Modal";

const IngresarCasoUso = () => {
  return (
    <div className="flex flex-col gap-2 p-4 border ">
      <h3 className="text-2xl">Ingresar Resumen de Programa</h3>
        <div className="flex w-full gap-4 ">
          <p className="font-bold">Nombre: </p>
          <input type="text" className="flex-grow border rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold">Descripcion: </p>
          <textarea className="w-full border rounded-md" />
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
                    <input type="number" className="w-full text-center bg-gray-100 " min={0} max={1000} defaultValue={0} />
                  </td>
                </tr>
                <tr>
                  <td>Medio</td>
                <td className="px-2">Interactuo con lineas de comando?</td>

                  <input type="number" className="w-full text-center bg-gray-100 " min={0} max={1000} defaultValue={0} />

                </tr>
                <tr>
                  <td>Complejo</td>
                <td className="px-2">Cuantos usuarios interactuando?</td>
                  <input type="number" className="w-full text-center bg-gray-100 " min={0} max={1000} defaultValue={0} />

                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-2 p-2 border rounded-md">
            <p className="text-xl">Transacciones</p>

          <div className="flex flex-col items-start gap-2">
            <div className="flex gap-2">
              <p className="font-bold">Descripcion:  </p>
              <input type="text" className="flex-grow border rounded-md" />
            </div>
            <div className="flex gap-2">
              <p className="font-bold">Numero de transacciones:  </p>
              <input type="number" className="flex-grow border rounded-md" />
            </div>
            <button className="px-2 text-white bg-blue-500 rounded-md">Agregar</button>
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

              <tr>
                <td className="p-2">Sacar Dinero</td>
                <td className="p-2">5</td>
                <td className="p-2">
                  <button className="px-2 text-white bg-red-500 rounded-md">Eliminar</button>
                </td>
              </tr>


            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
};

export default IngresarCasoUso;
