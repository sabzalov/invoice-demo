export const initialState = {
    invoices: {
        1: {
            id: 1,
            name: 'Widget',
            quantity: 2,
            price: 10.0,
        },
        2: {
            id: 2,
            name: 'Cog',
            quantity: 2,
            price: 15.99,
        },
    },
    order: [1, 2],
};

export const calculateTotal = ({ quantity, price }) => quantity * price;

export const invoiceReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_INVOICE':
            return {
                invoices: {
                    ...state.invoices,
                    [payload.id]: payload,
                },
                order: [...state.order, payload.id],
            };
        case 'EDIT_INVOICE':
            return {
                ...state,
                invoices: {
                    ...state.invoices,
                    [payload.id]: payload,
                },
            };
        case 'DELETE_INVOICE':
            return {
                ...state,
                order: state.order.filter(item => item !== payload),
            };
        default:
            return state;
    }
};
