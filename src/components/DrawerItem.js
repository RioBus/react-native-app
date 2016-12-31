import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from '../common';

const Style = {
    container: {
        height: 50,
        flex: 1,
        flexDirection: 'row'
    },
    iconContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
        flex: 8,
        justifyContent: 'center'
    },
    title: {
        color: '#666666',
        fontSize: 16
    }
};

export default props => (
    <View style={Style.container}>
        <View style={Style.iconContainer}>
            <Icon name={props.icon} color={Style.title.color} />
        </View>
        <View style={Style.titleContainer}>
            <Text style={Style.title}>{props.children}</Text>
        </View>
    </View>
);