import React from 'react';
import { View, Text } from 'react-native';
import { CardView, Header, Icon } from '../common';

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
                    <Header.LeftButton onPress={() => this.onPressLeftButton()}>
                        <Icon name="arrow-back" />
                    </Header.LeftButton>
                    <Header.Title>
                        <Text>Second page</Text>
                    </Header.Title>
                </Header>
            
                <View style={Style.container}>
                    <CardView style={Style.card}>
                        <Text style={Style.welcome}>
                            This page is presented only to iOS devices.
                        </Text>
                    </CardView>
                </View>
            </View>
        );
    }
}
