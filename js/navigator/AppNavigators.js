import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//@ https://github.com/react-navigation/react-navigation/releases/tag/v4.0.0
import { createStackNavigator, CardStyleInterpolators } from 'react-navigation-stack';
// 引入页面组件
import TabPage from './TabPage';
import LoginPage from '../page/Login';//登录
import HomePage from '../page/home';//首页
import MarketPage from '../page/market'; //商城
import ActivityPage from '../page/activity';//活动
import MessagePage from '../page/message';//消息
import MyPage from '../page/my';//我
import Detail from '../common/Detail';
import ChartsPage from "../common/ChartsPage";
import CustomTheme from "../common/CustomTheme";


export const rootCom = 'Init';//设置根路由，对应RootNavigator中第一个初始化的路由名
const IOS_MODAL_ROUTES = ['OptionsScreen'];
let dynamicModalTransition = (transitionProps, prevTransitionProps) => {
    const isModal = IOS_MODAL_ROUTES.some(
        screenName =>
            screenName === transitionProps.scene.route.routeName ||
            (prevTransitionProps &&
                screenName === prevTransitionProps.scene.route.routeName)
    );
    return StackViewTransitionConfigs.defaultTransitionConfig(
        transitionProps,
        prevTransitionProps,
        isModal
    );
};

const InitNavigator = createStackNavigator({
    LoginPage: {
        screen: LoginPage,
        navigationOptions: {
            headerTitle: '登录',
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    }
});

const defaultOption = {
    headerShown: false, // 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,  //设置转场动画
}

const MainNavigator = createStackNavigator({
    TabPage: {
        screen: TabPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    HomePage: {
        screen: HomePage,
        navigationOptions: defaultOption
    },
    MarketPage: {
        screen: MarketPage,
        navigationOptions: defaultOption
    },
    ActivityPage: {
        screen: ActivityPage,
        navigationOptions: defaultOption
    },
    MessagePage: {
        screen: MessagePage,
        navigationOptions: defaultOption
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: defaultOption
    },
    Detail: {
        screen: Detail,
        navigationOptions: defaultOption
    },
    ChartsPage: {
        screen: ChartsPage,
        navigationOptions: defaultOption
    },
    CustomTheme:{
        screen:CustomTheme,
        navigationOptions: defaultOption
    }

}, {
    mode: 'card',
    headerMode: 'none',
    defaultNavigationOptions: {
        headerShown: false,    // 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        gesturesEnabled: true,
    },
    transitionConfig: dynamicModalTransition

});
export default createAppContainer(createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        headerShown: false,
    },
}));
