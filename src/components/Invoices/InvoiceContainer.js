import { deleteInvoice, editInvoice } from '../../reducers/invoice/actions';

import { Invoice } from './Invoice';
import { calculateTotal } from '../../reducers/invoice/invoice';
import { connect } from 'react-redux';

const mapStateToProps = (state, { id }) => ({
    ...state.invoices[id],
    total: calculateTotal(state.invoices[id]),
});

export const InvoiceContainer = connect(
    mapStateToProps,
    {
        onDelete: deleteInvoice,
        onChange: editInvoice,
    },
)(Invoice);
