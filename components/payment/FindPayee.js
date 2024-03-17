import { React, useState } from 'react';
import { TextInput, SafeAreaView, Text, View} from "react-native";
import buttonStyles from '../styles/ButtonStyles';

const FindPayee = ({ onNext }) => {
    const [payee, setPayee] = useState('');
    
    return (
        <SafeAreaView>
            <Text style={styles.h1}>Enter Payee ID</Text>
            <TextInput
                style={styles.input}
                type="text"
                id="payee"
                name="payee"
                value={payee}
                onChangeText={setPayee}
                required
                placeholder='Ex: Zyambo'
            />
            <View style={styles.col12}>
                <button type="submit" style={buttonStyles.btnPrimary} onClick={onNext}>Next</button>
            </View>
        </SafeAreaView>

    );
};
export default FindPayee;
