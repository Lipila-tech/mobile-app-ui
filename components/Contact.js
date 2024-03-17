import { React, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';


const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.h1}>Send us a message</Text>

        <View style={styles.formGroup}>
          <label htmlFor="subject">Select Subject:</label>
          <select style={styles.formControl}>
            <option value="p1">Subject 1</option>
            <option value="p1">Subject 2</option>
            <option value="p1">Subject 3</option>
            <option value="p1">Subject 4</option>
          </select>
        </View>

        <View>
          <label htmlFor="email">Email:</label>
          <TextInput
            style={styles.input}
            type="text"
            id="email"
            name="email"
            value={email}
            onChangeText={setEmail}
            required
            placeholder='Ex: lipila@email.io'
          />
        </View>

        <View>
          <label htmlFor="message">Message:</label>
          <TextInput
            style={styles.input}
            type="text"
            id="message"
            name="message"
            value={message}
            onChangeText={setMessage}
            placeholder='Ex: Payment for the laptop...'
          />
        </View>

        <View style={styles.col12}>
          <button type="submit" style={styles.btnPrimary}>submit</button>
        </View>
      </SafeAreaView>

    </View>
  );
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:
      'center',
    justifyContent: 'center'
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
