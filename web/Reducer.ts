import { combineReducers } from 'redux';
import { Action } from './Action';

export type UnitSize = [number, string];

const defaultSiPrefixes : UnitSize[] = [
    [-6, 'micro'],
    [-3, 'milli'],
    [-2, 'centi'],
    [-1, 'deci'],
    [0, 'unit'],
    [1, 'deka'],
    [2, 'hecta'],
    [3, 'kilo'],
    [6, 'mega'],
];

const siPrefixes = function(state : UnitSize[] = defaultSiPrefixes, _ : Action) {
    return state;
}

// function decimalValue(state : number = 0, action : Action) {
//     return state;
// }
function decimalExponent(state : number = 0, action : Action) {
    switch (action.type) {
        case 'SetDecimalExponent':
            return action.payload;
        default:
            return state
    };
}
// function octalValue(state : number = 0, action : Action) {
//     return state;
// }
function octalExponent(state : number = 0, action : Action) {
    switch (action.type) {
        case 'SetOctalExponent':
            return action.payload;
        default:
            return state
    };
}

function converterValue(state : number = 0, action : Action) {
    if ( isNaN(action?.payload) ) {
        return state;
    }
    switch (action.type) {
        case 'SetConverterValue':
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    converter: combineReducers({
        value : converterValue,
        octalExponent,
        decimalExponent,
    }),
    siPrefixes,
});

export type RootState = ReturnType<typeof rootReducer>;

export const initialState : RootState = {
    siPrefixes: defaultSiPrefixes,
    converter: {
        value: 0,
        octalExponent: 0,
        decimalExponent: 0,
    }
}

export default rootReducer;
