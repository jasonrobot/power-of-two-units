export type ActionType =
    // 'SetDecimalValue' |
    'SetDecimalExponent' |
    // 'SetOctalValue' |
    'SetOctalExponent' |
    'SetConverterValue';

// interface AnyAction {
//     readonly type : ActionType;
//     readonly payload : any;
// }

interface SetConverterValueAction {
    type : 'SetConverterValue',
    payload : number,
}

interface SetOctalExponentAction {
    type : 'SetOctalExponent',
    payload : number,
}

interface SetDecimalExponentAction {
    type : 'SetDecimalExponent',
    payload : number,
}

export type Action =
    // AnyAction |
    SetOctalExponentAction |
    SetDecimalExponentAction |
    SetConverterValueAction;

export function setConverterValue(value : number) {
    return {
        type: 'SetConverterValue',
        payload: value
    };
}

export function setDecimalExponent(value : number) {
    return {
        type: 'SetDecimalExponent',
        payload: value,
    }
}

export function setOctalExponent(value : number) {
    return {
        type: 'SetOctalExponent',
        payload: value,
    }
}