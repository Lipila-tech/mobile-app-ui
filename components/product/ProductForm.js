import { useState } from 'react';
import { SafeAreaView, TextInput, View, Text } from 'react-native';
import Button from '../styles/ButtonStyles';
import formStyles from '../styles/formStyles';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [ProductDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const createProduct = async () => {
    alert('You clicked create product')
  }

  return (
    <SafeAreaView>
      <View style={formStyles.container}>
        <View style={formStyles.headerContainer}>
            <TextInput
            style={formStyles.input}
            onChangeText={setProductName}
            value={productName}
            placeholder='Ex. My Master Class'
            maxLength={150}
          />
          <TextInput
            style={formStyles.input}
            onChangeText={setProductDescription}
            value={ProductDescription}
            placeholder='Ex. Online four days masterclass'
            maxLength={300}
          />
          <TextInput
            style={formStyles.input}
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
export default ProductForm