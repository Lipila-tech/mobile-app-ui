import {StyleSheet, View, Pressable, Text, } from 'react-native';

import { Stack } from 'expo-router';


export default function Page() {
  return (
    <View style={styles.container}>
    <Stack.Screen
      options={{
        title: 'Home',
      }}
    />
    <Text>Welcome to Lipila</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems:
    'center',
    justifyContent: 'center'
  },
})
