import { Platform } from 'react-native';
import Color from 'color';

export default {

    brandPrimary: '#428bca',
    brandInfo: '#5bc0de',
    brandSuccess: '#5cb85c',
    brandDanger: '#d9534f',
    brandWarning: '#f0ad4e',
    brandSidebar: '#252932',
    
    statusBarStyle: 'default',
    get statusBarColor() {
        return (Platform.OS === 'ios') ?
            this.toolbarDefaultBg : Color(this.toolbarDefaultBg).darken(0.2).hex();
    },

    titleFontSize: 17,
    titleFontColor: '#000',
    toolbarDefaultBg: '#EEEEEE',
    toolbarBorderColor: '#CCCCCC',
    toolbarHeight: (Platform.OS === 'ios') ? 70 : 55,
    toolbarInverseBg: '#222',


    badgeColor: '#fff',
    badgeBg: '#ED1727',
    borderRadiusBase: 4,
    borderWidth: 1,
    btnDisabledBg: '#b5b5b5',
    btnDisabledClr: '#f1f1f1',
    btnLineHeight: (Platform.OS === 'ios') ? 20 : 23,
    cardDefaultBg: '#fff',
    contentPadding: 10,
    defaultProgressColor: '#E4202D',
    defaultSpinnerColor: '#45D56E',
    dropdownBg: '#000',
    dropdownLinkColor: '#414142',
    fontSizeBase: 15,
    footerHeight: 55,
    iconFontSize: 24,
    inputBorderColor: '#000',
    inputHeightBase: 40,
    inputGroupMarginBottom: 10,
    inputPaddingLeft: 5,
    inverseTextColor: '#fff',
    inverseSpinnerColor: '#1A191B',
    inverseProgressColor: '#1A191B',
    jumbotronBg: '#C9C9CE',
    jumbotronPadding: 30,
    listBorderColor: '#ddd',
    listDividerBg: '#F5F5F5',
    lineHeight: (Platform.OS === 'ios') ? 21 : 25,
    listItemPadding: 15,
    listNoteColor: '#58575C',
    tabBgColor: '#00c497',
    tabTextColor: '#fff',
    textColor: '#000',

    get fontSizeH1() {
        return this.fontSizeBase * 1.8;
    },
    get fontSizeH2() {
        return this.fontSizeBase * 1.6;
    },
    get fontSizeH3() {
        return this.fontSizeBase * 1.4;
    },
    get btnTextSize() {
        return this.fontSizeBase * 1.1;
    },
    get btnTextSizeLarge() {
        return this.fontSizeBase * 1.5;
    },
    get btnTextSizeSmall() {
        return this.fontSizeBase * 0.8;
    },
    get iconSizeLarge() {
        return this.iconFontSize * 1.5;
    },
    get iconSizeSmall() {
        return this.iconFontSize * 0.6;
    },
    get borderRadiusLarge() {
        return this.fontSizeBase * 3.8;
    },
    get darkenHeader() {
        return Color(this.tabBgColor).darken(0.03).hex();
    },
    get btnPrimaryBg() {
        return this.brandPrimary;
    },
    get btnPrimaryColor() {
        return this.inverseTextColor;
    },
    get btnSuccessBg() {
        return this.brandSuccess;
    },
    get btnSuccessColor() {
        return this.inverseTextColor;
    },
    get btnDangerBg() {
        return this.brandDanger;
    },
    get btnDangerColor() {
        return this.inverseTextColor;
    },
    get btnInfoBg() {
        return this.brandInfo;
    },
    get btnInfoColor() {
        return this.inverseTextColor;
    },
    get btnWarningBg() {
        return this.brandWarning;
    },
    get btnWarningColor() {
        return this.inverseTextColor;
    },
    get inputColor() {
        return this.textColor;
    },
    get inputColorPlaceholder() {
        return 'rgba(0, 0, 0, 0.7)';
    },
    get inputPaddingLeftIcon() {
        return this.inputPaddingLeft * 8;
    },

};
