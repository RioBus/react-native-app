import React from 'react';
import { Search } from './pages';

export default (routeId, navigator) => {
    switch (routeId) {

        default:
        case 'android-search':
        case 'ios-search':
            return <Search navigator={navigator} />;
    }
};
