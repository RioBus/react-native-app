import React from 'react';
import Home from './home/index';

export default (id, navigator) => {
    switch (id) {
        default :
            return <Home navigator={navigator} />;
    }
};