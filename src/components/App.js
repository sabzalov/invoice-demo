import './App.css';

import { InvoicesContainer } from './Invoices/InvoicesContainer';
import React from 'react';
import { TotalContainer } from './Total/TotalContainer';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="invoices-container">
                    <InvoicesContainer />
                </div>
                <div className="total-container">
                    <TotalContainer taxPercent={5} />
                </div>
            </div>
        );
    }
}

export default App;
