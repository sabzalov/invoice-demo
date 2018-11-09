let nextInvoiceId = 3;

export const addInvoice = payload => ({
    type: 'ADD_INVOICE',
    payload: {
        id: nextInvoiceId++,
        ...payload,
    },
});

export const editInvoice = payload => ({
    type: 'EDIT_INVOICE',
    payload,
});

export const deleteInvoice = id => {
    return {
        type: 'DELETE_INVOICE',
        payload: id,
    };
};
