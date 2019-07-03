import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Blablabla Login</Text>
        <Button title="Login" onPress={() => 
          this.props.navigation.navigate('Welcome')} />
        <Button title="Sign Up" onPress={() => 
          this.props.navigation.navigate('Signup')} /> 
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});