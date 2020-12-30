import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, Image } from "react-native";// 首页
import HomePage from '../page/home';//首页
import MarketPage from '../page/market'; //商城
import ActivityPage from '../page/activity';//活动
import MessagePage from '../page/message';//消息
import MyPage from '../page/my';//我
import { BottomTabBar } from 'react-navigation-tabs';


type Props = {};

const TABS = {
  //在这里配置页面的路由
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image source={require("../res/img/icon/fire.png")} style={styles.icon} />
      ),
    },
  },
  MarketPage: {
    screen: MarketPage,
    navigationOptions: {
      tabBarLabel: '商城',   
      tabBarIcon: ({ tintColor, focused }) => (
        <Image source={require("../res/img/icon/company.png")} style={styles.icon} />
      ), 
    },
  },
  ActivityPage: {
    screen: ActivityPage,
    navigationOptions: {
      tabBarLabel: 'add',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image source={require("../res/img/icon/chuang.png")} style={styles.icon} />
      ),
    },
  },
  MessagePage: {
    screen: MessagePage,
    navigationOptions: {
      tabBarLabel: '消息',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image source={require("../res/img/icon/letter.png")} style={styles.icon} />
      ),
    },
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我',
      tabBarIcon: ({ tintColor, focused }) => (
        <Image source={require("../res/img/icon/my.png")} style={styles.icon} />
      ),
    },
  },
};

class DynamicTabNavigator extends Component<Props> {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  _tabNavigator() {
    if (this.Tabs) {
      return this.Tabs;
    }
    const { HomePage,  MarketPage, ActivityPage, MessagePage, MyPage } = TABS;
    const tabs = { HomePage,  MarketPage, ActivityPage, MessagePage, MyPage }; //根据需要定制显示的tab
    MarketPage.navigationOptions.tabBarLabel = '商城'; //动态配置Tab属性
    return (this.Tabs = createAppContainer(
      createBottomTabNavigator(tabs, {
        tabBarComponent: props => {
          return <TabBarComponent {...props} />;
        },
      }),
    ));
  }

  render() {
    const Tab = this._tabNavigator();
    return (
      <Tab style={{height:20}}/>
    );
  }
}

class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <BottomTabBar
        {...this.props}
        
      />
    );
  }
}



export default DynamicTabNavigator;
const styles = StyleSheet.create({
  icon: {
    height: 21,
    width: 21,
  }
})