import React from 'react';
import { Search, Second } from './pages';

export default (routeId, navigator) => {
    switch (routeId) {
        
        default :
        case 'search': return <Search navigator={navigator} />;

        case 'second': return <Second navigator={navigator} />;
    }
};
