import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NavigationUtil from "../../navigator/NavigationUtil";
export default class Home extends Component<Props> {
    constructor(props) {
        super(props);
    }
    goDetail() {
        let  params = { };
        // this.props.navigation.navigate({ routeName: 'Detail' });
        NavigationUtil.goPage(params, 'Detail');
    }
    goCharts() {
        let  params = { };
        // this.props.navigation.navigate({ routeName: 'Charts' });
        NavigationUtil.goPage(params, 'Charts');
    }
    render() {
        return (
            <View style={{ flex: 1}}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={() => this.goDetail()} hitSlop={styles.hitSlop}>
                        <LinearGradient colors={['#0055CC', '#66A6FF']} style={styles.buttons} >
                            <Text style={styles.text}>绘图</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={() => this.goCharts()} hitSlop={styles.hitSlop}>
                        <LinearGradient colors={['#FF860D', '#FFB266']} style={styles.buttons}>
                            <Text style={styles.text}>展示图表</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    btn: {
        width: 250, 
        height: 50, 
        marginBottom:30
    },
    buttons: {
        width: 250,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
    },
    text: {
        color: "#fff", 
        height: 50,
        lineHeight: 50
    },
    hitSlop: {
        top: 40,
        left: 40
    }
});

