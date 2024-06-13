import React from "react";
import Modal from "@/components/commons/Modal";

const IngresarCasoUso = () => {
  return (
    <Modal show={true}>
      <div className="h-[60vh] w-[60vw] flex flex-col gap-2 px-4 border">
        <h3 className="text-2xl">Ingresar Caso Uso</h3>
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
              <thead className="bg-gray-200">
                <tr>


                  <th className="text-left">Nombre</th>
                  <th className="text-left">Descripcion</th>
                  <th className="text-left">Tipo</th>
                </tr>
              </thead>
              <tbody >
                <tr>
                  <td>Simple</td>
                  <td>APIs, SDKs, clientes programables</td>
                  {/* <td>Usuario</td> */}
                  <td>
                    <input type="number" className="w-full text-center bg-gray-100 " min={0} max={1000} defaultValue={0} />
                  </td>
                </tr>
                <tr>
                  <td>Medio</td>
                  <td>Interfaces CLI</td>

                  <input type="number" className="w-full text-center bg-gray-100 " min={0} max={1000} defaultValue={0} />

                </tr>
                <tr>
                  <td>Complejo</td>
                  <td>Usuarios interactuando</td>
                  <input type="number" className="w-full text-center bg-gray-100 " min={0} max={1000} defaultValue={0} />

                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-2 p-2 border rounded-md">
            <p className="text-xl">Transacciones</p>
          </div>
        </div>
      </div>
    </Modal >
  );
};

export default IngresarCasoUso;
