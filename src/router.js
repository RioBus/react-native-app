import React from 'react';
import Search from './search';
import Second from './second';
import Third from './third';

export const DEFAULT_ROUTE = 'search';

export const router = (id, navigator) => {
    switch (id) {
        case 'second':
            return <Second navigator={navigator} />;

        case 'third':
            return <Third navigator={navigator} />;

        case 'search':
        default :
            return <Search navigator={navigator} />;
    }
};