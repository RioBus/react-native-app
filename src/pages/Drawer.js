import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { DrawerItem } from '../components';

const Style = {
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    banner: {
        width: 300,
        height: 150
    }
};

export default class Drawer extends React.Component {

    render() {
        return (
            <View style={Style.container}>
                <Image
                    source={require('../assets/banner.jpg')}
                    style={Style.banner}
                />
                <ScrollView>
                    <DrawerItem icon="star">Favoritos</DrawerItem>
                    <DrawerItem icon="time">Histórico</DrawerItem>
                    <DrawerItem icon="chatboxes">Enviar comentários</DrawerItem>
                    <DrawerItem icon="help-circle">Sobre</DrawerItem>
                    <DrawerItem icon="appstore">Avalie o app</DrawerItem>
                    <DrawerItem icon="thumbs-up">Curta no Facebook</DrawerItem>
                    <DrawerItem icon="settings">Configurações</DrawerItem>
                </ScrollView>
            </View>
        );
    }
}