import { View } from 'react-native';

import { Tabs } from 'expo-router';
export default function Layout() {
  return (
      <Tabs>
        <Tabs.Screen 
          name='home'
          options={{
            tabBarLabel:'Home',
            tabBarActiveBackgroundColor:'#3498db',
            tabBarInactiveBackgroundColor:'gray',
            headerTintColor:'#580',
            tabBarActiveTintColor:'#fff',
            tabBarInactiveTintColor:'#aaa',
          }}
        />
      </Tabs>
  );
}
