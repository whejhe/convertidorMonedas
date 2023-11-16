import React from 'react';
import monedasLista from './monedas.js';
/*Usando React, vamos a crear un conversor de monedas a euros y viceversa. Se proporciona
un listado del valor de un euro en la moneda a cambiar Se debe poder seleccionar la moneda
que se quiere cambiar. Se debe poder cambiar de euros a la moneda seleccionada y de la
moneda seleccionada a euros.*/

function convertirMoneda() {
    const valorMoneda = monedasLista.value;
    const codigoMoneda = monedasLista.code;
    const Euros = "1";


    return (
        <form>
            <h1>Convertidor de Moneda</h1>
            <select value={valorMoneda}>
                <option value="">Seleccione una moneda</option>
                {monedasLista.map((moneda) => (
                    <option key={moneda.code} value={moneda.code}>
                        {moneda.code}
                    </option>
                ))}
                <option value={valorMoneda} code={codigoMoneda}>
                    {codigoMoneda}
                </option>
            </select>
            <input type="text" default={Euros} />
            <input type="text" value={codigoMoneda} />
        </form>
    );
}

export default convertirMoneda;