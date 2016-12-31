import React from 'react';
import { AndroidSearch, IOSSearch } from './pages';

export default function router(routeId, navigator) {
    switch (routeId) {

        case 'android-search':
            return <AndroidSearch navigator={navigator} />;

        case 'ios-search':
            return <IOSSearch navigator={navigator} />;

        default:
            const os = routeId.split('-')[0];
            return router(`${os}-search`);
    }
}

