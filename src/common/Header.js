import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Touchable } from './index';
import Theme from '../theme';

const Style = {
    toolbar: {
        height: Theme.toolbarHeight,
        backgroundColor: Theme.statusBarColor,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3
    },
    toolbarContainer: {
        backgroundColor: Theme.toolbarDefaultBg,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'center',
        height: (Platform.OS === 'ios') ? (Theme.toolbarHeight - 20) : Theme.toolbarHeight,
        marginTop: (Platform.OS === 'ios') ? 20 : 0
    },
    toolbarCustomContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: Theme.toolbarDefaultBg,
        height: (Platform.OS === 'ios') ? (Theme.toolbarHeight - 20) : Theme.toolbarHeight,
        marginTop: (Platform.OS === 'ios') ? 20 : 0
    },
    toolbarButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    toolbarButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    toolbarTitle: {
        fontSize: Theme.titleFontSize,
        color: Theme.titleFontColor,
        marginLeft: (Platform.OS === 'ios') ? 0 : 5
    },
    toolbarTitleContainer: {
        flex: 8,
        justifyContent: 'center',
        alignItems: (Platform.OS === 'ios') ? 'center' : 'flex-start'
    },
    shadow: {
        height: Theme.toolbarHeight + 3
    }
};

export default class Header extends React.Component {

    static Custom(props) {
        return (
            <View style={{ ...Style.toolbarCustomContainer, ...props.style }}>
                {props.children}
            </View>
        );
    }

    static Title(props) {
        return (
            <View style={Style.toolbarTitleContainer}>
                <Text style={Style.toolbarTitle}>{props.children}</Text>
            </View>
        );
    }

    static RightButton(props) {
        return (
            <Touchable
                style={Style.toolbarButton}
                onPress={props.onPress}
            >
                <View>{props.children}</View>
            </Touchable>
        );
    }

    static LeftButton(props) {
        return (
            <Touchable
                style={Style.toolbarButton}
                onPress={props.onPress}
            >
                <View>{props.children}</View>
            </Touchable>
        );
    }

    getElement(identifier, elements) {
        return (elements.length > 0) ?
            elements.find(el => el && el.type.name === identifier) : null;
    }

    renderContent() {
        const children = [].concat(this.props.children);

        const custom = this.getElement('Custom', children);
        if (custom) return custom;

        return (
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
        );
    }

    render() {
        return (
            <View style={this.props.noShadow ? null : Style.shadow}>
                <View style={Style.toolbar} elevation={this.props.noShadow ? 0 : 3}>
                    {this.renderContent()}
                </View>
            </View>
        );
    }

}
