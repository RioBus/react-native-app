import React from 'react';
import { View, Text, TouchableHighlight, Platform } from 'react-native';
import Theme from '../../theme';

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
    toolbarButton: {
        marginVertical: 12,
        flex: 1,
        alignItems: 'center'
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
            <View style={Style.shadow}>
                <View style={Style.toolbar} elevation={3}>
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
            </View>
        );
    }

}
