import { React, useState } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Text } from "react-native";


const PaymentDetails = ({ onNext }) => {
    const [amount, setAmount] = useState('');
    const [senderAccount, setSenderAccount] = useState('');
    const [product, setProduct] = useState('');
    const [description, setDescription] = useState('');
    return (
        <SafeAreaView>
            <Text style={styles.h1}>Payment Details</Text>
            <TextInput
                style={styles.input}
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChangeText={setAmount}
                required
                placeholder='Ex: 100'
            />
            <div className="form-group">
                <label htmlFor="product">Select Product:</label>
                <select className="form-control" id="product">
                    <option value="p1">Product 1</option>
                    <option value="p1">Product 2</option>
                    <option value="p1">Product 3</option>
                    <option value="p1">Product 4</option>
                </select>
            </div>

            <TextInput
                style={styles.input}
                type="text"
                id="senderAccountNumber"
                name="senderAccountNumber"
                value={senderAccount}
                onChangeText={setSenderAccount}
                required
                placeholder='Ex: 0969445566'
            />

            <TextInput
                style={styles.input}
                type="text"
                id="description"
                name="description"
                value={description}
                onChangeText={setDescription}
                placeholder='Ex: Payment for the laptop...'
            />

            <div className="form-group">
                <label htmlFor="paymentMethod">Select Payment Method:</label>
                <select className="form-control" id="paymentMethod">
                    <option value="MTN">MTN</option>
                    <option value="Airtel">Airtel</option>
                </select>
            </div>
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

export default PaymentDetails;
