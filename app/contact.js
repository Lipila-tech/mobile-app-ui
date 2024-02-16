import {StyleSheet, View, Text } from 'react-native';
import { Stack } from 'expo-router';


export default function Contact() {
  return (
    <View style={styles.container}>
        <Stack.Screen
          options={{
            title: 'Contact',
          }}
        />
        <Text>Contact Page</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems:
    'center',
    justifyContent: 'center'
  },
})
