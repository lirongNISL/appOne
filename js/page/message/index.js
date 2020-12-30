import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
// import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
export default class message extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", height: 50 }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 1 }}><Text style={{ textAlign: "center" }}>消息</Text></View>
                    <View style={{ flex: 1 }}><Text style={{ textAlign: "right" ,paddingRight:15}}>创建聊天</Text></View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#fff", padding: 15 }}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
                        <View style={styles.iconBox}>
                            <Image source={require("../../res/img/icon/praise.png")} style={styles.icon} />
                            <Text>赞和收藏</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
                        <View style={styles.iconBox}>
                            <Image source={require("../../res/img/icon/attention.png")} style={styles.icon} />
                            <Text>新增关注</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
                        <View style={styles.iconBox}>
                            <Image source={require("../../res/img/icon/comment.png")} style={styles.icon} />
                            <Text>评论和@</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: "#fff", padding: 15, marginTop: 10 }}>
                    <View style={styles.box}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Image source={require("../../res/img/icon/push.png")} style={styles.icons} />
                            <View style={styles.flexRow}>
                                <View style={{ maxWidth: 200 }}>
                                    <Text style={styles.title}>推送消息</Text>
                                    <Text style={styles.text} numberOfLines={1} ellipsizeMode={'tail'}>赞和收藏测试赞和收藏测试收藏测试</Text>
                                </View>
                                <View>
                                    <Text style={styles.date}>星期五</Text>
                                    {/* <Badge status="success" /> */}
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Image source={require("../../res/img/icon/note.png")} style={styles.icons} />
                            <View style={styles.flexRow}>
                                <View style={{ maxWidth: 200 }}>
                                    <Text style={styles.title}>推送消息</Text>
                                    <Text style={styles.text} numberOfLines={1} ellipsizeMode={'tail'}>赞和收藏测试赞和收藏测试收藏测试</Text>
                                </View>
                                <View>
                                    <Text style={styles.date}>05-12</Text>
                                    <Text style={styles.text}>赞</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Image source={require("../../res/img/icon/guan.png")} style={styles.icons} />
                            <View style={styles.flexRow}>
                                <View style={{ maxWidth: 200 }}>
                                    <Text style={styles.title}>推送消息</Text>
                                    <Text style={styles.text} numberOfLines={1} ellipsizeMode={'tail'}>赞和收藏测试赞和收藏测试收藏测试</Text>
                                </View>
                                <View>
                                    <Text style={styles.date}>12-21</Text>
                                    <Text style={styles.text}>赞</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Image source={require("../../res/img/icon/note.png")} style={styles.icons} />
                            <View style={styles.flexRow}>
                                <View style={{ maxWidth: 200 }}>
                                    <Text style={styles.title}>推送消息</Text>
                                    <Text style={styles.text} numberOfLines={1} ellipsizeMode={'tail'}>赞和收藏测试赞和收藏测试收藏测试</Text>
                                </View>
                                <View>
                                    <Text style={styles.date}>星期五</Text>
                                    <Text style={styles.text}>收藏</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Image source={require("../../res/img/icon/note.png")} style={styles.icons} />
                            <View style={styles.flexRowlast}>
                                <View style={{ maxWidth: 200 }}>
                                    <Text style={styles.title}>推送消息</Text>
                                    <Text style={styles.text} numberOfLines={1} ellipsizeMode={'tail'}>赞和收藏测试赞和收藏测试收藏测试</Text>
                                </View>
                                <View>
                                    <Text style={styles.date}>星期五</Text>
                                    <Text style={styles.text}>赞和收藏</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7"
    },
    flexRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 80,
        borderBottomColor: "#DFDFDF",
        borderBottomWidth: 1
    },
    flexRowlast: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 80,
    },
    btn: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    iconBox: {
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 20,
        height: 20,
        margin: 10
    },
    box: {
        height: 80,

    },
    icons: {
        width: 30,
        height: 30,
        marginTop: 25,
        marginLeft: 10,
        marginRight: 15,
    },
    title: {
        paddingTop: 22,
        fontSize: 16,
        color: "#333"
    },
    text: {
        fontSize: 14,
        color: "#999"
    },
    date: {
        paddingTop: 22,
        fontSize: 14,
        color: "#999"
    }
});