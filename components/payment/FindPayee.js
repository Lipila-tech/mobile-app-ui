import { React, useState } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Text } from "react-native";


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
            <div className='col-12'>
                <button type="submit" className="btn btn-primary mb-2" onClick={onNext}>Next</button>
            </div>
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
