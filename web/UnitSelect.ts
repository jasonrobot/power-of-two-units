import React from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import h from 'react-hyperscript'; // or 'virtual-hyperscript'

import { Action } from './Action';
import { RootState } from './Reducer';

function mapStateToProps(state : RootState) {
    return {
        units : state.siPrefixes
    };
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
    value : number;
    handleSelection : (value : number) => Action;
}

const UnitSelect : React.FC<Props> = ({value: selectedValue, units, handleSelection} : Props) => {
    if (units.some(unit => unit[0] === selectedValue) === false) {
        // we're being told to set to a unit that isn't available, pick the closest.
    }
    return h('select', {
        value: selectedValue,
        onChange: (event : React.ChangeEvent<HTMLSelectElement>) => handleSelection(Number(event.target.value))
    }, [
        ...units.map(([value, label]) => h('option', {value}, label))
    ]);
}

export default connector(UnitSelect);
