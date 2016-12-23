import React from 'react';
import { View, Text } from 'react-native';

export default props => {
    return (
        <View>
            <Text>{props.line.line}</Text>
            <Text>{props.line.description}</Text>
        </View>
    );
};