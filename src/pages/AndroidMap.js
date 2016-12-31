import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Header, Icon } from '../common';

const Style = {
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
};

class Map extends React.Component {

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
            <View style={Style.mapContainer}>
                <MapView
                    style={Style.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
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
