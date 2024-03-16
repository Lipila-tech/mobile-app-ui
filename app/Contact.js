import { React, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput} from 'react-native';
import { Stack } from 'expo-router';


const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
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
      <SafeAreaView>
        <Text style={styles.h1}>Email</Text>
        <View>
          <label htmlFor="email">Email</label>
          <TextInput
            style={styles.input}
            type="text"
            id="email"
            name="email"
            value={email}
            onChangeText={setEmail}
            required
            placeholder='Ex: pz@lipila.io'
          />
        </View>

        <View style={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <select style={styles.formControl}>
            <option value="p1">Lipila Pricing</option>
            <option value="p1">Job offer</option>
            <option value="p1">Other</option>
          </select>
        </View>

        <View>
          <label htmlFor="message">Message</label>
          <TextInput
            style={styles.input}
            type="text"
            id="message"
            name="message"
            value={message}
            onChangeText={setMessage}
            required
            placeholder='Ex: How much is the pricing for one....'
          />
        </View>

        <View style={styles.col12}>
          <button type="submit" style={styles.btnPrimary}>Submit</button>
        </View>
      </SafeAreaView>

    </View>
  );
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
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
  contentText: {
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  h1: {
    fontSize: 30,
    color: 'blue',
  },
})
