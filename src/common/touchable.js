import React from 'react';
import { View, TouchableHighlight } from 'react-native';

export default props => (
    <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#00000000"
        onPress={props.onPress}
        style={{ ...props.style }}
    >
        <View>
            {props.children}
        </View>
    </TouchableHighlight>
);
