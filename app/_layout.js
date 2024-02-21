import { View, StyleSheet } from 'react-native';

import { Tabs } from 'expo-router';
export default function Layout() {
  return (
      <Tabs>
        <Tabs.Screen 
          name='home'
          options={{
            tabBarLabel:'Home',
            tabBarActiveBackgroundColor:'#580',
            headerTintColor:'#580',
          }}
        />
      </Tabs>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:'pink',
  }
})
