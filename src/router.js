import React from 'react';
import { Search, IOSSecond, AndroidSecond } from './pages';

export default (routeId, navigator) => {
    switch (routeId) {

        default:
        case 'android-search':
        case 'ios-search':
            return <Search navigator={navigator} />;

        case 'android-second':
            return <AndroidSecond navigator={navigator} />;

        case 'ios-second':
            return <IOSSecond navigator={navigator} />;
    }
};
