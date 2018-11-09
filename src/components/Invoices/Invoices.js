import './Invoices.css';

import { Invoice } from './Invoice';
import { InvoiceContainer } from './InvoiceContainer';
import React from 'react';

export const Invoices = ({ invoices, onCreate }) => (
    <ul className="invoices">
        <li className="invoice-row titles">
            <span>Item</span>
            <span>Qty</span>
            <span>Price</span>
            <span className="total">Total</span>
        </li>
        {invoices.map(id => (
            <li key={id} className="invoice-line">
                <InvoiceContainer id={id} />
            </li>
        ))}
        <li>
            <Invoice onChange={payload => onCreate(payload)} />
        </li>
    </ul>
);
