import React from 'react';
import { View, Text } from 'react-native';
import { CardView, Header, Icon } from '../common';

export default class Second extends React.Component {

    onPressLeftButton() {
        this.props.navigator.pop();
    }

    get Style() {
        return {
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
            
                <View style={this.Style.container}>
                    <CardView style={this.Style.card}>
                        <Text style={this.Style.welcome}>
                            This page is presented only to iOS devices.
                        </Text>
                    </CardView>
                </View>
            </View>
        );
    }
}
