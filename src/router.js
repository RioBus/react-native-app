import React from 'react';
import { Home, IOSSecond, AndroidSecond } from './pages';

export default (routeId, navigator) => {
    switch (routeId) {

        default:
        case 'android-home':
        case 'ios-home':
            return <Home navigator={navigator} />;

        case 'android-second':
            return <AndroidSecond navigator={navigator} />;

        case 'ios-second':
            return <IOSSecond navigator={navigator} />;
    }
};
