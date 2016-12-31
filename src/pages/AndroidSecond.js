import React from 'react';
import { View, Text } from 'react-native';
import { CardView, Header } from '../common';

const Style = {
    card: {
        padding: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
};

export default class Second extends React.Component {

    onPressLeftButton() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Header.Custom style={{ justifyContent: 'space-between' }}>
                        <Text onPress={() => this.onPressLeftButton()}>Back</Text>
                        <Text>Second page</Text>
                    </Header.Custom>
                </Header>
            
                <View style={Style.container}>
                    <CardView style={Style.card}>
                        <Text style={Style.welcome}>
                            This page has a custom header and is presented only to Android.
                        </Text>
                    </CardView>
                </View>
            </View>
        );
    }
}
