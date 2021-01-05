import React from 'react';
import h from 'react-hyperscript'; // or 'virtual-hyperscript'
import { useDispatch } from 'react-redux';

import UnitSelect from './UnitSelect';

import { setConverterValue } from './Action';

interface Props {
    value : number;
    exponent : number;
    base : number;
    updateExponent : any;
}

/**
 * Get the exponent offset of a number
 */
// function adjustExponent( value: string ): number {
//     if ( value.includes( '.' ) ) {
//         if ( value[ 0 ] === '0' || value[ 0 ] === '.' ) {
//             // lenth of 0s right of dot, plus one
//             return value.split( '.' )[ 1 ].search( /[^0]/ ) + 1
//         } else {
//             return value.split( '.' )[ 0 ].length - 1
//         }
//     } else {
//         return value.length - 1
//     }
// }


function convertBaseToDecimal(value : string, exponent : number, base : number) : number {
    const [
        whole = '0',
        fractional = '0'
    ] = value.split('.');

    const add = (a : number, b : number) => a + b;
    return (
        whole
            .split('')
            .reverse()
            .map((c : string, e) => Number(c) * (base ** (e + exponent)))
            .reduce(add, 0)
    ) + (
        fractional
            .split('')
            .map((c : string, e)=> Number(c) * (base ** (-1 - e + exponent)))
            .reduce(add, 0)
    )
}

const UnitInput : React.FC<Props> = ({value, exponent, base, updateExponent} : Props) => {

    const dispatch = useDispatch();

    return h('div', [
        h('input', {
            value: (value * (base ** -exponent)).toString(base),
            onChange: (event : React.ChangeEvent<HTMLInputElement>) => {
                dispatch(setConverterValue(convertBaseToDecimal(event.target.value, exponent, base)))
            },
        }),
        h(UnitSelect, {value: exponent, handleSelection: updateExponent}),
    ]);
}

export default UnitInput;
