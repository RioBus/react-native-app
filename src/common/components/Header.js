import React from 'react';
import { View, Text, TouchableHighlight, Platform } from 'react-native';
import Theme from '../../theme';

const Style = {
    toolbar: {
        height: Theme.toolbarHeight,
        backgroundColor: Theme.statusBarColor,
    },
    toolbarContainer: {
        backgroundColor: Theme.toolbarDefaultBg,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'center',
        height: (Theme.toolbarHeight - 20),
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
        borderBottomWidth: 1,
        borderColor: Theme.toolbarBorderColor
    },
    toolbarButton: {
        marginVertical: 12,
        flex: 1,
        alignItems: 'center'
    },
    toolbarTitle: {
        marginTop: 12,
        fontSize: Theme.titleFontSize,
        color: Theme.titleFontColor,
        textAlign: (Platform.OS === 'ios') ? 'center' : 'left'
    },
    toolbarTitleContainer: {
        flex: 8
    }
};

export default class Header extends React.Component {

    static Title(props) {
        return (
            <View style={Style.toolbarTitleContainer}>
                <Text style={Style.toolbarTitle}>{props.children}</Text>
            </View>
        );
    }

    static RightButton(props) {
        return (
            <TouchableHighlight
                style={Style.toolbarButton}
                onPress={props.onPress}
                activeOpacity={0.4}
                underlayColor={Style.toolbar.backgroundColor}
            >
                <View>{props.children}</View>
            </TouchableHighlight>
        );
    }

    static LeftButton(props) {
        return (
            <TouchableHighlight
                style={Style.toolbarButton}
                onPress={props.onPress}
                activeOpacity={0.4}
                underlayColor={Style.toolbar.backgroundColor}
            >
                <View>{props.children}</View>
            </TouchableHighlight>
        );
    }

    getElement(identifier, elements) {
        return (elements.length > 0) ?
            elements.find(el => el && el.type.name === identifier) : null;
    }

    render() {
        const children = [].concat(this.props.children);
        return (
            <View style={Style.toolbar}>
                <View style={Style.toolbarContainer}>
                    <View style={{ flex: 1 }}>
                        {this.getElement('LeftButton', children)}
                    </View>
                    <View style={{ flex: 8 }}>
                        {this.getElement('Title', children)}
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.getElement('RightButton', children)}
                    </View>
                </View>
            </View>
        );
    }

}
