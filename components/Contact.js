import { React, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import buttonStyles from './styles/ButtonStyles';
import mainStyles from './styles/MainStyles';
import formStyles from './styles/formStyles';


const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={mainStyles.container}>
      <SafeAreaView style={mainStyles.contentContainer}>
        <Text style={mainStyles.h1}>Send us a message</Text>

        <View style={mainStyles.formGroup}>
          <label htmlFor="subject">Select Subject:</label>
          <select style={formStyles.input}>
            <option value="p1">Subject 1</option>
            <option value="p1">Subject 2</option>
            <option value="p1">Subject 3</option>
            <option value="p1">Subject 4</option>
          </select>
        </View>

        <View style={mainStyles.formGroup}>
          <label htmlFor="email">Email:</label>
          <TextInput
            style={formStyles.input}
            type="text"
            id="email"
            name="email"
            value={email}
            onChangeText={setEmail}
            required
            placeholder='Ex: lipila@email.io'
          />
        </View>

        <View style={mainStyles.formGroup}>
          <label htmlFor="message">Message:</label>
          <TextInput
            style={formStyles.input}
            type="text"
            id="message"
            name="message"
            value={message}
            onChangeText={setMessage}
            placeholder='Ex: Payment for the laptop...'
          />
        </View>

        <View style={mainStyles.col12}>
          <Button
            title="Submit"
            onPress={() => alert('Button pressed!')}
            style={buttonStyles.btnPrimary}
          />
        </View>
      </SafeAreaView>

    </View>
  );
}

export default Contact;