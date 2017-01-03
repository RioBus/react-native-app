import React from 'react';
import { Platform } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Theme from '../theme';

function getSize(size) {
    if ((size >>> 0) > 0) return size;
    switch (size) {
        case 'small': return Theme.iconSizeSmall;
        default:
        case 'medium': return Theme.iconFontSize;
        case 'large': return Theme.iconSizeLarge;
    }
} 

export default ({ name, size, color }) => {
    name = (Platform.OS === 'ios') ? `ios-${name}` : `md-${name}`;
    size = getSize(size);
    color = color || '#000';
    return <Ionicon name={name} size={size} color={color} />;
};
