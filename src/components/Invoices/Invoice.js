import './Invoices.css';

import React, { Component } from 'react';

import { Dollar } from '../Dollar';

const blankState = {
    name: '',
    quantity: 0,
    price: 0,
};

export class Invoice extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: this.props.name || '',
            quantity: this.props.quantity || 0,
            price: this.props.price || 0,
        };
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                className="invoice-row"
                id={this.props.id || 'newInvoice'}
                data-cy={`form-${this.props.id || 'new'}`}
            >
                <input type="submit" hidden />
                <input
                    className="name"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    required
                />
                <input
                    type="number"
                    name="quantity"
                    min="0"
                    step="1"
                    value={this.state.quantity}
                    onChange={this.onChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    min="0.00"
                    step="0.01"
                    value={this.state.price}
                    onChange={this.onChange}
                    required
                />

                <div className="total">
                    {this.props.total && <Dollar amount={this.props.total} />}
                    {this.props.id && (
                        <button onClick={this.onDelete} className="delete">
                            X
                        </button>
                    )}
                </div>
            </form>
        );
    }

    onDelete() {
        this.props.onDelete(this.props.id);
    }

    onChange(e) {
        e.preventDefault();

        this.setState({
            ...this.state,
            [e.target.name]:
                e.target.name === 'name'
                    ? e.target.value
                    : Number(e.target.value),
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const values = this.state;
        if (this.props.id) {
            values.id = this.props.id;
        } else {
            this.setState(blankState);
        }

        this.props.onChange(values);
    }
}
