import React, { useCallback, useState, useEffect } from 'react';
import monedasLista from './monedas.js';

const ConvertidorDeMoneda = () => {
    const [monedaSeleccionada, setMonedaSeleccionada] = useState("");
    const [valorEnEuros, setValorEnEuros] = useState(1);
    const [valorConvertido, setValorConvertido] = useState(0);

    const manejarCambioMoneda = useCallback((event) => {
        setMonedaSeleccionada(event.target.value);
    }, []);

    const manejarCambioEuros = useCallback((event) => {
        setValorEnEuros(event.target.value);
    }, []);

    useEffect(() => {
        const converted = Number(valorEnEuros) * monedasLista.values;
        setValorConvertido(converted);
    }, [valorEnEuros]);

    useEffect(() => {
        const converted = Number(valorConvertido) * monedasLista.values;
        setValorEnEuros(converted);
    }, [valorConvertido]);

    return (
        <div>
            <h1>Convertidor de Moneda</h1>
            <select
                value={monedaSeleccionada}
                onChange={manejarCambioMoneda}
            >
                <option value="">Seleccione una moneda</option>
                {monedasLista.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                        {currency.code}
                    </option>
                ))}
            </select>
            <input
                type="number"
                value={valorEnEuros}
                onChange={manejarCambioEuros}
            />
            <input
                type='number'
                value={valorConvertido}
                onChange={(event) => setValorConvertido(event.target.value)}
            />
        </div>
    );
};

export default ConvertidorDeMoneda;