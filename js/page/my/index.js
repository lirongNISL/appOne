import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
export default class my extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{ textAlign: "center", fontSize: 15, height: 50 }}>
                    <Text style={{ textAlign: "center", fontSize: 15, height: 50, lineHeight: 50 }}>我的</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../../res/img/icon/avator.png')} style={styles.image} />
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 15, height: 25, lineHeight: 25 }}>用户名：1233122</Text>
                        <Text style={{ fontSize: 15, height: 25, lineHeight: 25 }}>地址：1233122</Text>
                        <Text style={{ fontSize: 15, height: 25, lineHeight: 25 }}>账号：1233122</Text>
                    </View>
                </View>

            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 80,
        height: 80,
        margin: 20

    }

});