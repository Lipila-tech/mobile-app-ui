import { React, useState } from 'react';
import { TextInput, SafeAreaView, Text, View } from "react-native";
import buttonStyles from '../styles/ButtonStyles';
import mainStyles from '../styles/MainStyles';
import formStyles from '../styles/formStyles';


const PaymentDetails = ({ onNext }) => {
    const [amount, setAmount] = useState('');
    const [senderAccount, setSenderAccount] = useState('');
    const [product, setProduct] = useState('');
    const [description, setDescription] = useState('');
    return (
        <SafeAreaView style={mainStyles.contentContainer}>
            <Text style={buttonStyles.h1}>Payment Details</Text>
            <TextInput
                style={formStyles.input}
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChangeText={setAmount}
                required
                placeholder='Ex: 100'
            />
            <View style={buttonStyles.formGroup}>
                <label htmlFor="product">Select Product:</label>
                <select style={formStyles.input}>
                    <option value="p1">Product 1</option>
                    <option value="p1">Product 2</option>
                    <option value="p1">Product 3</option>
                    <option value="p1">Product 4</option>
                </select>
            </View>
            <View style={buttonStyles.formGroup}>
                <TextInput
                    style={formStyles.input}
                    type="text"
                    id="senderAccountNumber"
                    name="senderAccountNumber"
                    value={senderAccount}
                    onChangeText={setSenderAccount}
                    required
                    placeholder='Ex: 0969445566'
                />
            </View>
            <View style={buttonStyles.formGroup}>
                <TextInput
                    style={formStyles.input}
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChangeText={setDescription}
                    placeholder='Ex: Payment for the laptop...'
                />
            </View>

            <View style={buttonStyles.formGroup}>
                <label htmlFor="paymentMethod">Select Payment Method:</label>
                <select style={formStyles.input}>
                    <option value="MTN">MTN</option>
                    <option value="Airtel">Airtel</option>
                </select>
            </View>
            <View style={buttonStyles.col12}>
                <button type="submit" style={buttonStyles.btnPrimary} onClick={onNext}>Next</button>
            </View>
        </SafeAreaView>

    );
};
export default PaymentDetails;
