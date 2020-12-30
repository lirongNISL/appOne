import React, { Component } from 'react';
import { DeviceInfo, Modal, TouchableHighlight, Platform, ScrollView, StyleSheet, Text, View, Dimensions,DeviceEventEmitter} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import NavigationUtil from "../navigator/NavigationUtil";
import {ThemeFlags} from "./ThemeFlags";
const BACKGROUND_COLOR = '#f3f3f4';
const { height, width } = Dimensions.get('window');
class CustomTheme extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible:true
        }
    }

    onSelectTheme(themeKey) {
        DeviceEventEmitter.emit("theme", themeKey);
        this.onClose();
    }

    // saveKey(value, callback) {
    //     AsyncStorage.setItem('themeKey', value, (error, result) => {
    //         if (!error) {
    //             AsyncStorage.setItem('themeKey', value);
    //         }
    //     });
    // }
    /**
     * 创建主题Item
     * @param themeKey
     */
    getThemeItem(themeKey) {
        return <TouchableHighlight
            style={{ flex: 1 }}
            underlayColor='white'
            onPress={() => this.onSelectTheme(themeKey.value)}
        >
            <View style={[{ backgroundColor: themeKey.value }, styles.themeItem]}>
                <Text style={{color:"#fff"}}>{themeKey.text}</Text>
            </View>
        </TouchableHighlight>;
    }

    renderThemeItems() {
        const views = [];
        let keys = ThemeFlags;
        let l = ThemeFlags.length;
        for (let i = 0; i < l; i += 3) {
            let key1 = keys[i], key2 = keys[i + 1], key3 = keys[i + 2];
            views.push(
            <View key={i} style={{ flexDirection: 'row' }}>
                {this.getThemeItem(key1)}
                {this.getThemeItem(key2)}
                {this.getThemeItem(key3)}
            </View>);
        }
        return views;
    }
    onClose(){
        let  params = {};
        NavigationUtil.goBack(this.props.navigation);
    }
    renderContentView() {
        return (
            // <Modal
            //     animationType={'slide'}
            //     transparent={true}
            //     visible={this.state.visible}
            //     onRequestClose={() => {
            //         this.onClose();
            //     }}
            // >
                <View style={styles.modalContainer}>
                    <ScrollView>
                        {this.renderThemeItems()}
                    </ScrollView>
                </View>
            // </Modal>
        );
    }

    render() {
        let view = this.state.visible ? <View style={styles.root_container}>
            {this.renderContentView()}
        </View> : null;
        return view;
    }
}

export default CustomTheme;
const styles = StyleSheet.create({
    themeItem: {
        flex: 1,
        height: 120,
        margin: 3,
        padding: 3,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    modalContainer: {
        flex: 1,
        margin: 10,
        marginBottom: 10 + (DeviceInfo.isIPhoneX_deprecated ? 24 : 0),
        marginTop: Platform.OS === 'ios' ? 20 + (DeviceInfo.isIPhoneX_deprecated ? 24 : 0) : 10,
        backgroundColor: 'white',
        borderRadius: 3,
        shadowColor: 'gray',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        padding: 3,
    },
    themeText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
    line: {
        height: 0.5,
        opacity: 0.5,
        backgroundColor: 'darkgray',
    },
    root_container: {
        flex: 1,
        height:'100%',
        backgroundColor: BACKGROUND_COLOR,
    },
    nav_bar_height_ios: 44,
    nav_bar_height_android: 50,
    // backgroundColor: BACKGROUND_COLOR,
    window_height: height,
});
