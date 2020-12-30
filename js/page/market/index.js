import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
export default class market extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
  
    render() {
       
        return (
            <View style={styles.container}>
               <Text>商城</Text>  
            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
   
});