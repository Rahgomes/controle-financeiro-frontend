import React from 'react';
import PeriodSelect from './components/periodSelect/PeriodSelect';

export default function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="center-align">Controle Financeiro Pessoal</h1>
        <PeriodSelect />
      </div>
    </React.Fragment>
  )
}
