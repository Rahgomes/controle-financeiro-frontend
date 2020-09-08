import React from 'react';
import PreviousDateButton from './PreviousDateButton';
import NextDateButton from './NextDateButton';
import DateSelect from './DateSelect';

export default function PeriodSelect() {
    return (
        <div style={
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }>
            <PreviousDateButton />
            <DateSelect />
            <NextDateButton />
        </div>
    )
}
