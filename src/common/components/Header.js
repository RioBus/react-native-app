import React from 'react';
import NavigationBar from 'react-native-navbar';
import { View, Text, TouchableHighlight, Platform } from 'react-native';
import Theme from '../../theme';

const Style = {
    toolbar: {
        height: Theme.toolbarHeight,
        backgroundColor: Theme.toolbarDefaultBg
    },
    toolbarButton: {
        alignSelf: 'center',
        marginHorizontal: 15
    },
    toolbarTitle: {
        fontSize: Theme.titleFontSize,
        color: Theme.titleFontColor
    },
    toolbarTitleContainer: {
        marginVertical: 5
    },
    shadow: {
        borderBottomColor: Theme.toolbarBorderColor,
        borderBottomWidth: 1
    }
};

export default class Header extends React.Component {

    static Title({ children }) {
        return (
            <View style={Style.toolbarTitleContainer}>
                <Text style={Style.toolbarTitle}>{children}</Text>
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

    getTitle(element) {
        if (element instanceof Array) {
            const elem = element.find(el => el.type.name === 'Title');
            return elem;
        } else if (element.type.name === 'Title') {
            return element;
        }
    }

    getRightButton(element) {
        if (element instanceof Array) {
            const elem = element.find(el => el.type.name === 'RightButton');
            return elem;
        } else if (element.type.name === 'RightButton') {
            return element;
        }
        return { title: '' };
    }

    getLeftButton(element) {
        if (element instanceof Array) {
            const elem = element.find(el => el.type.name === 'LeftButton');
            return elem;
        } else if (element.type.name === 'LeftButton') {
            return element;
        }
        return { title: '' };
    }

    get ToolbarStyle() {
        const style = Style.toolbar;
        if (Platform.OS === 'ios') delete style.height;
        return style;
    }

    render() {
        return (
            <View style={Style.shadow}>
                <NavigationBar
                    title={this.getTitle(this.props.children)}
                    tintColor={Style.toolbar.backgroundColor}
                    leftButton={this.getLeftButton(this.props.children)}
                    rightButton={this.getRightButton(this.props.children)}
                    statusBar={{
                        style: Theme.statusBarStyle,
                        tintColor: Theme.statusBarColor
                    }}
                    style={this.ToolbarStyle}
                />
            </View>
        );
    }

}
