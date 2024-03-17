import { View, Pressable, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import mainStyles from '../components/styles/MainStyles';
import buttonStyles from '../components/styles/ButtonStyles';

const WelcomeScreen = () => {
  return (
    <View style={mainStyles.contentContainer}>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <View>
        <View style={mainStyles.headerContainer}>
          <Text style={mainStyles.headerTitle}>Good day Pita!</Text>
        </View>
        <Text style={mainStyles.contentTitle}>
          What do you wanna do today?
        </Text>
        <View style={buttonStyles.buttonBox}>
          <Pressable style={buttonStyles.button}>Send Money</Pressable>
        </View>
        <View style={buttonStyles.buttonBox}>
          <Pressable style={buttonStyles.button}>Contact Us</Pressable>
        </View>
        <View style={buttonStyles.buttonBox}>
          <Pressable style={buttonStyles.button}>About</Pressable>
        </View>
      </View>
    </View>
  );
}

export default WelcomeScreen;