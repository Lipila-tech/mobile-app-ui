import { View, StyleSheet } from 'react-native';

import { Tabs } from 'expo-router';
export default function Layout() {
  return (
      <Tabs>
        <Tabs.Screen 
          name='home'
          options={{
          }}
        />
      </Tabs>
  );
}