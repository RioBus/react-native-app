import React from 'react';
import { Home, IOSSecond, AndroidSecond } from './pages';

export default (routeId, os, navigator) => {
    switch (routeId) {

        default:
        case 'home':
            return <Home navigator={navigator} />;

        case 'second':
            return (os === 'android') ?
                <AndroidSecond navigator={navigator} /> : <IOSSecond navigator={navigator} />;
    }
};
