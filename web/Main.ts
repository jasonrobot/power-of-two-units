import React from 'react';
import { bindActionCreators } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import h from 'react-hyperscript'; // or 'virtual-hyperscript'
const { div } = require('hyperscript-helpers')(h);
import { pick } from 'ramda';

import {
    setDecimalExponent,
    setOctalExponent
} from './Action';

import { RootState } from './Reducer';
import UnitInput from './UnitInput';

// function mapStateToProps(state : RootState) {
//     return {
//         converterValue: state.converterValue
//     }
// }

const mapStateToProps = (state : RootState) =>
    pick([
        'converter',
    ], state );

const mapDispatchToProps = function(dispatch : any) {
    return bindActionCreators({
        setDecimalExponent,
        setOctalExponent,
    }, dispatch)
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const Main : React.FC<Props> = function(
    {
        converter: {
            value,
            decimalExponent,
            octalExponent,
        },
        setDecimalExponent,
        setOctalExponent,
    } : Props) {

    return div([], [
        div([], 'octal:'),
        div([], 'hex:'),
        div([], [
            'decimal: ',
            h(UnitInput, {
                value,
                exponent: decimalExponent,
                base: 10,
                updateExponent: setDecimalExponent
            }),
            'octal: ',
            h(UnitInput, {
                value,
                exponent: octalExponent,
                base: 8,
                updateExponent: setOctalExponent
            }),
        ])
    ])
}


export default connector(Main);
