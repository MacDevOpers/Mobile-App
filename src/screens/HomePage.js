import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyApp</Text>
      <Text style={styles.description}>
        This app includes a map and a timer!
      </Text>
      <Button title="Login" onPress={() => alert('Login Page')} />
      <Button title="Register" onPress={() => alert('Register Page')} />
      <Button title="Go to Map" onPress={() => navigation.navigate('Map')} />
      <Button
        title="Go to Timer"
        onPress={() => navigation.navigate('Timer')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 32,
  },
});

export default HomePage;
