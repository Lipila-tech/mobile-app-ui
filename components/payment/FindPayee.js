import { React, useState } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Text, View} from "react-native";


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
                <button type="submit" style={styles.btnPrimary} onClick={onNext}>Next</button>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
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
});

export default FindPayee;
