import { StyleSheet, View, Text } from 'react-native';
import { Stack } from 'expo-router';


export default function Contact() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Contact',
        }}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Good day Pita!</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text>Contact Page</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
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
})
