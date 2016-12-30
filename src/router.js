import React from 'react';
import { Home, Second } from './pages';

export default (routeId, navigator) => {
    switch (routeId) {
        default :
        case 'home': return <Home navigator={navigator} />;

        case 'second': return <Second navigator={navigator} />;
    }
};
