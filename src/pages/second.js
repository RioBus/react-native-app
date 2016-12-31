import React from 'react';
import { View, Text } from 'react-native';
import { Header, Icon } from '../common';

export default class Second extends React.Component {

    onPressLeftButton() {
        this.props.navigator.pop();
    }

    get Style() {
        return {
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
                    <Header.Custom>
                        <Text>Second page</Text>
                    </Header.Custom>
                </Header>
            
                <View style={this.Style.container}>
                    <Text style={this.Style.welcome}>
                        Welcome to React Native second page! This page has
                        a custom header.
                    </Text>
                </View>
            </View>
        );
    }
}
