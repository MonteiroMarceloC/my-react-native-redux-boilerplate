import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Home</Text>
        <Button title="Settings" onPress={() => 
          this.props.navigation.navigate('Settings')} /> 
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});