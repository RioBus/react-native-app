import React from 'react';
import { AndroidSearch, IOSSearch } from './pages';

export default (routeId, os, navigator) => {
    switch (routeId) {

        default:
        case 'search':
            return (os === 'android') ?
            <AndroidSearch navigator={navigator} /> : <IOSSearch navigator={navigator} />;
    }
};
