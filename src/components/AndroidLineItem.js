import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from '../common';

const Style = {

    title: { fontWeight: 'bold', fontSize: 16, color: '#000' },

    description: { fontSize: 14, color: '#999' },

    star: { fontSize: 28, color: '#FFD700' },

    grid: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#DDD',
        borderBottomWidth: 1
    },

    leftCol: {
        marginHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        flex: 9
    },

    rightCol: {
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
            <Text style={Style.title}>{props.line.line}</Text>
            <Text style={Style.description}>{props.line.description}</Text>
        </View>
        <View style={Style.rightCol}>
            <Icon name='star-outline' size={Style.star.size} color={Style.star.color} />
        </View>
    </View>
);
