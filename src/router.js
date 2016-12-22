import React from 'react';
import Home from './home';
import Second from './second';
import Third from './third';

export const DEFAULT_ROUTE = 'home';

export const router = (id, navigator) => {
    switch (id) {
        case 'second':
            return <Second navigator={navigator} />;

        case 'third':
            return <Third navigator={navigator} />;

        case 'home':
        default :
            return <Home navigator={navigator} />;
    }
};