import { StyleSheet, View, Pressable, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';


const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Good day Pita!</Text>
        </View>

        <View style={styles.buttonBox}>
          <Pressable style={styles.button}>Login</Pressable>
        </View>
        <View style={styles.buttonBox}>
          <Pressable style={styles.button}>Terms of Use</Pressable>
        </View>
        <View style={styles.buttonBox}>
          <Pressable style={styles.button}>About</Pressable>
        </View>
      </View>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#3498db',
    borderWidth: 2,
    borderColor: "blue",
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonBox: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerContainer: {
    backgroundColor: '#3498db',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  hover: {
    color: 'green',
    backgroundColor: 'green',
    transition: "all 100ms ease",
    transform: "scale(1.05)",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)"
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  contentPressable: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

})
