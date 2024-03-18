import { View, Pressable, Text, StyleSheet } from 'react-native';
import { React, useState } from 'react';
import { Stack } from 'expo-router';
import mainStyles from '../components/styles/MainStyles';
import buttonStyles from '../components/styles/ButtonStyles';
import FindPayee from '../components/Modals/FindPayee';
import FindCreator from '../components/Modals/FindCreator';
import FindInvoice from '../components/Modals/FindInvoice';


const WelcomeScreen = () => {
  const [isModalPayeeVisible, setIsPayeeModalVisible] = useState(false);
  const [isModalCreatorVisible, setIsCreatorModalVisible] = useState(false);
  const [isModalInvoiceVisible, setIsInvoiceModalVisible] = useState(false);

  const handleSendMoney = () => {
    setIsPayeeModalVisible(true);
  }

  const handleSupportCreator = () => {
    setIsCreatorModalVisible(true);
  }

  const handlePayInvoice = () => {
    setIsInvoiceModalVisible(true);
  }

  const onPayeeModalClose = () => {
    setIsPayeeModalVisible(false);
  }

  const onCreatorModalClose = () => {
    setIsCreatorModalVisible(false);
  }

  const onInvoiceModalClose = () => {
    setIsInvoiceModalVisible(false);
  }
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
        <View style={styles.centeredVie}>
          <View style={buttonStyles.buttonBox}>
            <FindPayee modalVisible={isModalPayeeVisible}  onClose={onPayeeModalClose}/>
            <Pressable style={buttonStyles.button} onPress={handleSendMoney}>Send Money</Pressable>
          </View>
          <View style={buttonStyles.buttonBox}>
            <FindCreator modalVisible={isModalCreatorVisible} onClose={onCreatorModalClose} />
            <Pressable style={buttonStyles.button} onPress={handleSupportCreator}>Support a Creator</Pressable>
          </View>
          <View style={buttonStyles.buttonBox}>
            <FindInvoice modalVisible={isModalInvoiceVisible} onClose={onInvoiceModalClose}/>
            <Pressable style={buttonStyles.button} onPress={handlePayInvoice}>Pay An Invoice</Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;