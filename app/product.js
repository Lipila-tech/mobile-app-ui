import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import ProductButton from '../components/ProductButton';
import { useState } from 'react';
import ProductCreator from '../components/ProductCreator';
import ProductForm from '../components/ProductForm';


export default function Payment() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onCreateProduct = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  return (
    <>
      <View style={styles.container}>
        <Stack.Screen
          options={{
            title: 'Product',
          }}
        />
        <ProductCreator isVisible={isModalVisible} onClose={onModalClose}>
          <ProductForm></ProductForm>
        </ProductCreator>
        {!isModalVisible && (
          <View style={styles.buttonContainer}>
            <ProductButton onPress={onCreateProduct} />
          </View>
        )}
      </View>
    </>
);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems:
      'center',
    justifyContent: 'center'
  },
})
