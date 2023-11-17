// src/components/Formulario.js
import React, { useState } from 'react';
import  monedasLista  from './monedas.js';

const Formulario = () => {
    const [euros, setEuros] = useState(0);
    const [cambio, setCambio] = useState(0);
    const [monedaSeleccionada, setMonedaSeleccionada] = useState('USD'); // Moneda por defecto, puedes cambiarla según tus necesidades

    const handleEurosChange = (e) => {
        const valorEuros = parseFloat(e.target.value);
        setEuros(valorEuros);
        const nuevoCambio = valorEuros * monedasLista.find(moneda => moneda.code === monedaSeleccionada).value;
        setCambio(nuevoCambio);
    };

    const handleCambioChange = (e) => {
        const valorCambio = parseFloat(e.target.value);
        setCambio(valorCambio);
        const nuevoEuros = valorCambio / monedasLista.find(moneda => moneda.code === monedaSeleccionada).value;
        setEuros(nuevoEuros);
    };

    const handleMonedaChange = (e) => {
        const nuevaMoneda = e.target.value;
        setMonedaSeleccionada(nuevaMoneda);
        const nuevaTasaDeCambio = euros * monedasLista.find(moneda => moneda.code === nuevaMoneda).value;
        setCambio(nuevaTasaDeCambio);
    };

    return (
        <div>
            <label>Euros:</label>
            <input type="number" value={euros} onChange={handleEurosChange} />

            <label>Selecciona moneda:</label>
            <select value={monedaSeleccionada} onChange={handleMonedaChange}>
                {monedasLista.map((moneda) => (
                    <option key={moneda.code} value={moneda.code}>
                        {moneda.code}
                    </option>
                ))}
            </select>

            <label>Cambio en otra moneda:</label>
            <input type="number" value={cambio} onChange={handleCambioChange} />
        </div>
    );
};

export default Formulario;
