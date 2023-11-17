import React, { useState } from 'react';
import  monedasLista  from './monedas.js';
import './convert.css';

const Formulario = () => {
    const [euros, setEuros] = useState(0);
    const [cambio, setCambio] = useState(0);
    const [monedaSeleccionada, setMonedaSeleccionada] = useState('USD');

    const handleEurosChange = (e) => {
        const valorEuros = parseFloat(e.target.value);
        setEuros(valorEuros);
        const nuevoCambio = parseFloat(valorEuros * monedasLista.find(moneda => moneda.code === monedaSeleccionada).value.toFixed(2));
        setCambio(nuevoCambio);
    };

    const handleCambioChange = (e) => {
        const valorCambio = parseFloat(e.target.value);
        setCambio(valorCambio);
        const nuevoEuros = parseFloat(valorCambio / monedasLista.find(moneda => moneda.code === monedaSeleccionada).value.toFixed(2));
        setEuros(nuevoEuros);
    };

    const handleMonedaChange = (e) => {
        const nuevaMoneda = e.target.value;
        setMonedaSeleccionada(nuevaMoneda);
        const nuevaTasaDeCambio = parseFloat(euros * monedasLista.find(moneda => moneda.code === nuevaMoneda).value.toFixed(2));
        setCambio(nuevaTasaDeCambio);
    };

    return (
        <div className='title'>
            <h1>Convertidor de Moneda</h1>
        <div className='form'>
        <label>Selecciona moneda:</label>
        <select value={monedaSeleccionada} onChange={handleMonedaChange}>
                {monedasLista.map((moneda) => (
                    <option key={moneda.code} value={moneda.code}>
                        {moneda.code}
                    </option>
                ))}
            </select>
            <br></br>
            <label>Euros:</label>
            <input type="number" value={euros} onChange={handleEurosChange} />

            <label>Cambio a {monedaSeleccionada}:</label>
            <input type="number" value={cambio} onChange={handleCambioChange} />
        </div>
        </div>
    );
};

export default Formulario;
