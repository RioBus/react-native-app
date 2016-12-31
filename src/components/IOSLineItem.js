import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from '../common';

const Style = {

    title: { fontSize: 16, color: '#000' },

    description: { fontSize: 14, color: '#999' },

    star: { size: 40, color: '#FFD700' },

    grid: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#DDD',
        borderBottomWidth: 1
    },

    rightCol: {
        marginHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        flex: 9
    },

    leftCol: {
        width: 28,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        paddingVertical: 10,
        flex: 1
    }
};

export default props => (
    <View style={Style.grid}>
        <View style={Style.leftCol}>
            <Icon name='star-outline' size={Style.star.size} color={Style.star.color} />
        </View>
        <View style={Style.rightCol}>
            <Text style={Style.title}>{props.line.line}</Text>
            <Text style={Style.description}>{props.line.description}</Text>
        </View>
    </View>
);
