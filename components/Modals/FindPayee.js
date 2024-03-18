import { React, useState } from 'react';
import { Modal, TextInput, SafeAreaView, Text, View } from "react-native";
import buttonStyles from '../styles/ButtonStyles';
import formStyles from '../styles/formStyles';
import mainStyles from '../styles/MainStyles';

const FindPayee = ({ onNext, modalVisible }) => {
    const [payee, setPayee] = useState('');
    
    const handlePayModalNext= () =>{
        alert('Modal button clicked');
    }

    return (
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <SafeAreaView style={mainStyles.modalView}>
                <Text style={mainStyles.modalText}>Enter Payee ID</Text>
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
                    <button type="submit" style={buttonStyles.btnPrimary} onClick={handlePayModalNext}>Next</button>
                </View>
            </SafeAreaView>
        </Modal>


    );
};
export default FindPayee;
