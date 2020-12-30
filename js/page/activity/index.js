/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, Text, View,  KeyboardAvoidingView, Platform } from 'react-native';

export default class Activity extends Component<Props> {
  constructor(props) {
    super(props); 
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>       
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
 
});

