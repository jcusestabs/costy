import React, { useState, useEffect } from 'react';

const PuntoObjeto = () => {
  const [number1, setNumber1] = useState('');
  const [dropdownValue, setDropdownValue] = useState('Sencilla');
  const [complexityValue, setComplexityValue] = useState(1); // Valor inicial para 'Sencilla'
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  // Función para actualizar el valor del resultado
  const updateResult = () => {
    // Verificar si number1 es un número válido
    const num1 = parseFloat(number1);
    if (isNaN(num1)) {
      setResult('Ingrese un número válido en el primer campo');
      return;
    }

    // Calcular el resultado multiplicando number1 por complexityValue
    const calculatedResult = num1 * complexityValue;
    setResult(`Resultado: ${calculatedResult}`);
  };

  // Efecto para actualizar el valor de complexityValue basado en dropdownValue
  useEffect(() => {
    switch (dropdownValue) {
      case 'Sencilla':
        setComplexityValue(1);
        break;
      case 'Media':
        setComplexityValue(2);
        break;
      case 'Compleja':
        setComplexityValue(3);
        break;
      default:
        setComplexityValue(1);
    }
  }, [dropdownValue]);

  // Estilos personalizados
  const buttonStyle = {
    backgroundColor: 'lightblue',
    border: '1px solid black',
    padding: '5px 10px',
    cursor: 'pointer'
  };

  const inputStyle = {
    backgroundColor: 'white',
    border: '1px solid black',
    padding: '5px',
    margin: '0 10px'
  };

  const dropdownStyle = {
    backgroundColor: 'lightblue',
    border: '1px solid black',
    padding: '5px 10px',
    margin: '0 10px'
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0'
  };

  return (
    <div>
      <div style={containerStyle}>
        <button style={buttonStyle}>Pantallas</button>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          style={inputStyle}
        />
        <select
          value={dropdownValue}
          onChange={(e) => setDropdownValue(e.target.value)}
          style={dropdownStyle}
        >
          <option value="Sencilla">Sencilla</option>
          <option value="Media">Media</option>
          <option value="Compleja">Compleja</option>
        </select>
        <input
          type="text"
          value={` ${complexityValue}`}
          readOnly
          style={inputStyle}
        />
        <input
          type="text"
          value={result}
          readOnly
          style={inputStyle}
        />
        <button onClick={updateResult} style={buttonStyle}>Calcular</button>
      </div>
    </div>
  );
};

export default PuntoObjeto;