import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import CircleButton from '../components/CircleButton';
import { useState } from 'react';
import ProductCreator from '../components/ProductCreator';

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
          {/* text input components will go here */}
        </ProductCreator>
        <View style={styles.buttonContainer}>
          <CircleButton onPress={onCreateProduct} />
        </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:
      'center',
    justifyContent: 'center'
  },
})
