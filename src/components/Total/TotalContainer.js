import { Total } from './Total';
import { calculateTotal } from '../../reducers/invoice/invoice';
import { connect } from 'react-redux';

const getValidInvoices = state => {
    return state.order
        .map(id => state.invoices[id])
        .filter(
            ({ quantity, price }) =>
                Number.isFinite(quantity) && Number.isFinite(price),
        );
};

const getSubtotal = invoices =>
    invoices.reduce((total, invoice) => total + calculateTotal(invoice), 0);
const getTax = (subtotal, taxPercent) => subtotal * (taxPercent / 100);
const getTotal = (subtotal, taxAmount) => subtotal + taxAmount;

const mapStateToProps = (state, { taxPercent }) => {
    const invoices = getValidInvoices(state);
    const subtotal = getSubtotal(invoices);
    const taxAmount = getTax(subtotal, taxPercent);
    const total = getTotal(subtotal, taxAmount);

    return {
        subtotal,
        total,
        tax: taxAmount,
    };
};

export const TotalContainer = connect(mapStateToProps)(Total);
