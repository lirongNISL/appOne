import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, DeviceEventEmitter } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import NavigationUtil from "../navigator/NavigationUtil";
import WebCanvas from './WebCanvas';
import Base64 from "./base64";
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
var base64 = Base64;
var url = 'http://192.168.0.43:8080/teacher/data/01010072/1/438/4257-1-0-0.jpg';
var subscription = "";
export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      height: this.props.height,
      width: this.props.width
    }
  }
  state = {
  };
  _pen() {
    this.refs.canvas._pen();
  }

  _clean() {
    this.refs.canvas._clean();
  }

  // 以url的形式添加背景
  _addImageUrl() {
    this.refs.canvas._addImageUrl(url);
  }

  // 以base64的形式添加背景
  _addImageBase64() {
    this.refs.canvas._addImageBase64(base64);
  }

  // 得到图片的base64形式
  _getBase64() {
    this.refs.canvas._getBase64(base64);
  }

  // 保存base64
  _handleBase64(data) {
    alert(data)
  }

  // 图片右转
  _rotateRight() {
    this.refs.canvas._rotateRight();
  }
  // 选择颜色
  _selectColor() {
    let params = {};
    NavigationUtil.goPage(params, 'CustomTheme');
    
  }
  componentDidMount() {
    subscription = DeviceEventEmitter.addListener("theme", (param) => {
      // 刷新界面等
      this.refs.canvas._selectColor(param);
    });
  }
  componentWillUnmount() {
    subscription.remove();
  }
 
  //选择形状
  _getShape() {

  }
  // 放大
  _getZoom() {

  }
  // 撤回
  _getUndo() {

  }
  render() {
    return (
      <View style={styles.container}>
        <WebCanvas
          handleBase64={this._handleBase64.bind(this)}
          ref='canvas'
          height={winHeight - 150}
          width={winWidth}
        />
        <View style={styles.options}>
          <View style={styles.box}>
            <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={this._pen.bind(this)}>
              <LinearGradient colors={['#0055CC', '#66A6FF']} style={styles.buttons} >
                <Text style={styles.text}>Pencil</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={this._selectColor.bind(this)}>
              <LinearGradient colors={['#0055CC', '#66A6FF']} style={styles.buttons} >
                <Text style={styles.text}>Color</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={this._getZoom.bind(this)}>
              <LinearGradient colors={['#0055CC', '#66A6FF']} style={styles.buttons} >
                <Text style={styles.text}>Zoom</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={this._getUndo.bind(this)}>
              <LinearGradient colors={['#0055CC', '#66A6FF']} style={styles.buttons} >
                <Text style={styles.text}>Undo</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={this._getShape.bind(this)}>
              <LinearGradient colors={['#0055CC', '#66A6FF']} style={styles.buttons} >
                <Text style={styles.text}>shape</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={this._addImageUrl.bind(this)}>
              <LinearGradient colors={['#0055CC', '#66A6FF']} style={styles.buttons} >
                <Text style={styles.text}>UrlUpload</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={this._addImageBase64.bind(this)}>
              <LinearGradient colors={['#0055CC', '#66A6FF']} style={styles.buttons} >
                <Text style={styles.text}>Base64</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={this._getBase64.bind(this)}>
              <LinearGradient colors={['#0055CC', '#66A6FF']} style={styles.buttons} >
                <Text style={styles.text}>Save</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    width: winWidth,
    height: winHeight,

  },
  options: {
    height: 150,
  },
  box: {
    flexDirection: "row", justifyContent: "space-between", padding: 10
  },
  btn: {
    width: 80,
    height: 50,
  },
  buttons: {
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    height: 50,
    lineHeight: 50,
    color: "#fff",
    fontSize: 13
  }
});
