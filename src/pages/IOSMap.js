import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { Header, Icon } from '../common';

const Style = {
    searchbar: {
        borderRadius: 4,
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
        height: 32,
        flex: 8,
        marginLeft: 8,
        fontSize: 16
    }
};

class Map extends React.Component {

    state = { text: '' };

    onPressBackButton() {
        this.props.navigator.pop();
    }

    renderHeader() {
        return (
            <Header>
                <Header.LeftButton onPress={() => this.onPressBackButton()}>
                    <Icon name="arrow-back" color="white" />
                </Header.LeftButton>
                <Header.Title>
                    Map
                </Header.Title>
            </Header>
        );
    }

    renderContent() {
        return (
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderHeader()}
                {this.renderContent()}
            </View>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         downloadLines: () => dispatch(downloadLines())
//     };
// }

// function mapStateToProps(state) {
//     return {
//         lines: state.lines.lines
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Map);
export default Map;
