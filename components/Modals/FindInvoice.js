import { React, useState } from 'react';
import { Modal, TextInput, SafeAreaView, Text, View, Pressable } from "react-native";
import buttonStyles from '../styles/ButtonStyles';
import formStyles from '../styles/formStyles';
import mainStyles from '../styles/MainStyles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const FindInvoice = ({ onClose, modalVisible }) => {
    const [payee, setPayee] = useState('');

    const handlePayInvoiceModalNext = () => {
        alert('Pay invoice button clicked');
    }

    return (
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <SafeAreaView style={mainStyles.modalView}>
                <Text style={mainStyles.modalText}>Enter Invoice Number</Text>
                <TextInput
                    style={formStyles.input}
                    type="text"
                    id="payee"
                    name="payee"
                    value={payee}
                    onChangeText={setPayee}
                    required
                    placeholder='Ex: Zyambo'
                />
                <View style={formStyles.col12}>
                    <button type="submit" style={buttonStyles.btnPrimary} onClick={handlePayInvoiceModalNext}>Next</button>
                </View>
                <Pressable onPress={onClose}>
                    <MaterialIcons name="close" color="#888" size={22} />
                </Pressable>
            </SafeAreaView>
        </Modal>


    );
};
export default FindInvoice;
