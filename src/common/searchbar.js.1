import React from 'react';
import { Platform, TextInput } from 'react-native';
import { CardView, Icon, Touchable } from './index';

const Style = {
    searchBar: {
        backgroundColor: '#FFFFFF',
        borderRadius: Platform.OS === 'ios' ? 4 : 2,
        paddingHorizontal: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        flex: 1,
        color: '#999999',
        size: 18
    },
    searchBox: {
        height: Platform.OS === 'ios' ? 32 : 40,
        flex: 8,
        marginHorizontal: 8,
        fontSize: 16,
        borderWidth: 0
    }
};

export default class Searchbar extends React.Component {

    state = { text: '' };

    onChangeText(text) {
        this.setState({ text });
        if (this.props.onChangeText) {
            this.props.onChangeText(text);
        }
    }

    onPressClear() {
        this.setState({ text: '' });
        if (this.props.onChangeText) {
            this.props.onChangeText('');
        }
    }

    render() {
        return (
            <CardView style={{ ...this.props.style, ...Style.searchBar }}>
                <Icon
                    name="search"
                    style={Style.searchIcon}
                    size={Style.searchIcon.size}
                    color={Style.searchIcon.color}
                />
                <TextInput
                    style={Style.searchBox}
                    onChangeText={text => this.onChangeText(text)}
                    value={this.state.text}
                    placeholder={this.props.placeholder}
                    autoCorrect={false}
                    autoFocus={this.props.autoFocus}
                />
                <Touchable onPress={() => this.onPressClear()}>
                    <Icon
                        name={Platform.OS === 'ios' ? 'close-circle' : 'close'}
                        style={Style.searchIcon}
                        size={Style.searchIcon.size}
                        color={Style.searchIcon.color}
                    />
                </Touchable>
            </CardView>
        );
    }
}
