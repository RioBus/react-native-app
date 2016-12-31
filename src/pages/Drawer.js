import React from 'react';
import { View, Text } from 'react-native';

export default class Drawer extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>
                    I'm in the Drawer!
                </Text>
            </View>
        );
    }
}