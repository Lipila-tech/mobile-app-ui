import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';
import Button from '../Button';


const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [ProductDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const createProduct = async () => {
    alert('You clicked create product')
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
            <TextInput
            style={styles.input}
            onChangeText={setProductName}
            value={productName}
            placeholder='Ex. My Master Class'
            maxLength={150}
          />
          <TextInput
            style={styles.input}
            onChangeText={setProductDescription}
            value={ProductDescription}
            placeholder='Ex. Online four days masterclass'
            maxLength={300}
          />
          <TextInput
            style={styles.input}
            onChangeText={setProductPrice}
            value={productPrice}
            placeholder="Ex. 100"
            keyboardType="numeric"
          />
          <Button onPress={createProduct} label={'Submit'}></Button>
        </View>
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
});

export default ProductForm