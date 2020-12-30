import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground, Image, Dimensions, YellowBox, BVLinearGraient, Platform } from 'react-native';
import NavigationUtil from "../../navigator/NavigationUtil";
const winWidth = Dimensions.get('window').width;
const winHeight= Dimensions.get('window').height;
export default class Login extends Component<Props> {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHomPage({
                navigation: this.props.navigation,
            });
        }, 3000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    /**跳转首页*/
    ToHomPage() {
        // 解决启动白屏
        setTimeout(function(){
            NavigationUtil.resetToHomPage({
                navigation: this.props.navigation,
            });
        },3000)
        
    }

    render() {
        
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <ImageBackground style={styles.imageBackground} source={require('../../res/img/bg.png')} resizeMode="cover">
                        <View style={styles.imageBackground}>
                            <View style={{flex:1,paddingTop:200,justifyContent:"center",alignItems:"center"}}>
                                <Text style={styles.text}>MyApp</Text>
                            </View>
                            <View style={styles.footer}>
                                <Text >欢迎来到我的频道</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
        backgroundColor: "#fff",
    },
    icon: {
        width: 17, height: 17, marginRight: 5
    },
    imageBackground: {
        width: winWidth,
        height: winHeight,
    },
    inputBox: {
        alignItems: "center",
        marginTop: 25
    },
    select: {
        flexDirection: "row",
        margin: 0,
        padding: 0,
        height: 50,
        lineHeight: 50,
        marginTop: 25,
        marginBottom: -25
    },
    active: {
        color: "#1861f2",
        fontSize: 20,
        fontWeight: "600",
        flex: 1,
        height: 50,
        lineHeight: 50,
        textAlign: "center"
    },
    text: {
        color: '#1d2023',
        fontSize: 20,
        fontWeight: "600",
        flex: 1,
        height: 50,
        lineHeight: 50,
        textAlign: "center"
    },
    
    footer: {
        position: "relative",
        bottom: 30,
        marginBottom: 30,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        height: 56,

    },
    footImg: {
        width: 311, height: 56
    },
    linearGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    hitSlop: {
        left: 40, right: 40, top: 20, bottom: 40
    }

})



// 1.组件特殊属性——propTypes
// 对Component设置propTypes属性，可以为Component的props属性进行类型检查。

