import { Invoices } from './Invoices';
import { addInvoice } from '../../reducers/invoice/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    invoices: state.order,
});

export const InvoicesContainer = connect(
    mapStateToProps,
    {
        onCreate: addInvoice,
    },
)(Invoices);
