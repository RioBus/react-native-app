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
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
};

export default class Home extends React.Component {

    onPressRightButton() {
        this.props.navigator.push({ id: 'second', args: { foo: 'nothing yet' } });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Header.Title>
                        <Text>Header</Text>
                    </Header.Title>
                    <Header.RightButton onPress={() => this.onPressRightButton()}>
                        <Icon name="arrow-forward" />
                    </Header.RightButton>
                </Header>
            
                <View style={Style.container}>
                    <CardView style={Style.card}>
                        <Text style={Style.welcome}>
                            Welcome to React Native!!!!
                        </Text>
                        <Text style={Style.instructions}>
                            To get started, edit index.android.js
                        </Text>
                        <Text style={Style.instructions}>
                            Double tap R on your keyboard to reload,{'\n'}
                            Shake or press menu button for dev menu
                        </Text>
                    </CardView>
                </View>
            </View>
        );
    }
}
