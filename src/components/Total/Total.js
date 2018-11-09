import './Total.css';

import { Dollar } from '../Dollar';
import React from 'react';
import { percentFormatter } from '../../utils/helpers';

export const Total = props => (
    <dl className="total-list">
        <dt data-cy="total-subtotal">Subtotal</dt>
        <dd>
            <Dollar amount={props.subtotal} />
        </dd>
        <dt>Tax ({percentFormatter.format(props.taxPercent / 100)})</dt>
        <dd data-cy="total-tax">
            <Dollar amount={props.tax} />
        </dd>
        <dt>Total</dt>
        <dd data-cy="total-final">
            <Dollar amount={props.total} />
        </dd>
    </dl>
);
