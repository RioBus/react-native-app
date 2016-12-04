import React from 'react';
import Home from './home';
import Second from './second';

export default (id, navigator) => {
    switch (id) {
        case 'second':
            return <Second navigator={navigator} />;

        case 'home':
        default :
            return <Home navigator={navigator} />;
    }
};