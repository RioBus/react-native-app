import React from 'react';
import { AndroidSearch, IOSSearch, Map } from './pages';

export default (route, os, navigator) => {
    switch (route.id) {

        default:
        case 'search':
            return (os === 'android') ?
            <AndroidSearch navigator={navigator} /> : <IOSSearch navigator={navigator} />;

        case 'map':
            return <Map navigator={navigator} />;
    }
};
