import { Platform } from 'react-native';
import Color from 'color';

export default {

    titleFontSize: 17,
    titleFontColor: '#000',
    toolbarDefaultBg: '#EEEEEE',
    toolbarHeight: (Platform.OS === 'ios') ? 70 : 55,
    statusBarStyle: 'default',
    get statusBarColor() {
        return (Platform.OS === 'ios') ?
            this.toolbarDefaultBg : Color(this.toolbarDefaultBg).darken(0.2).hex();
    },

    iconFontSize: 24,

    get iconSizeLarge() {
        return this.iconFontSize * 1.5;
    },
    get iconSizeSmall() {
        return this.iconFontSize * 0.6;
    },

};
