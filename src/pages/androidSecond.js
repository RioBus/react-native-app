import React from 'react';
import { View, Text } from 'react-native';
import { CardView, Header, Searchbar } from '../common';

const Style = {
    card: {
        marginVertical: 10,
        padding: 10
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
};

export default class Second extends React.Component {

    state = { text: '' };

    onChangeText(text) {
        this.setState({ text });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Header.Custom>
                        <Searchbar
                            onChangeText={this.onChangeText.bind(this)}
                            placeholder="Text your search here"
                            autoFocus
                        />
                    </Header.Custom>
                </Header>
            
                <View style={Style.container}>
                    <CardView style={Style.card}>
                        <Text style={Style.welcome}>
                            You typed: {this.state.text}
                        </Text>
                    </CardView>
                </View>
            </View>
        );
    }
}
