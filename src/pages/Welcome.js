import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Welcome;