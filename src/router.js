import React from 'react';
import { AndroidSearch, IOSSearch, Map } from './pages';

export default (routeId, os, navigator) => {
    switch (routeId) {

        default:
        case 'search':
            return (os === 'android') ?
            <AndroidSearch navigator={navigator} /> : <IOSSearch navigator={navigator} />;

        case 'map':
            return <Map navigator={navigator} />;
    }
};
