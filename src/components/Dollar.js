import React from 'react';
import { dollarFormatter } from '../utils/helpers';

export const Dollar = ({ amount }) => (
    <span>{dollarFormatter.format(amount)}</span>
);
