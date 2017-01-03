import React from 'react';
import { Home, IOSSecond, AndroidSecond } from './pages';

export default (route, os, navigator) => {
    switch (route.id) {

        default:
        case 'home':
            return <Home navigator={navigator} args={route.args} />;

        case 'second':
            return (os === 'android') ?
                <AndroidSecond navigator={navigator} args={route.args} />
                : <IOSSecond navigator={navigator} args={route.args} />;
    }
};
