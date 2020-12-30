import React, {Component} from 'react';
import NavigationUtil from './NavigationUtil';
import DynamicTabNavigator from './DynamicTabNavigator';


type Props = {};

class TabPage extends Component<Props> {
    constructor(props) {
        super(props);
    }
    render() {      
        NavigationUtil.navigation = this.props.navigation;
        return <>
            <DynamicTabNavigator/>
        </>;
    }
}



export default TabPage;
