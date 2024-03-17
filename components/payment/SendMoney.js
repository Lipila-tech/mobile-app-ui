import React, { useState } from 'react';
import PaymentDetails from './PaymentDetails';
import Confirmation from './Confirmation';
import { View, StyleSheet } from 'react-native';
import FindPayee from './FindPayee';

const PaymentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    amount: '',
    senderAccountNumber: '',
    receiverAccountNumber: '',
    description: '',
  });


  const handleSubmit = (event) => {
    alert('Submit button clicked');
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const [currentStep, setCurrentStep] = useState(0);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onNext = () => {
    setCurrentStep(currentStep + 1);
  };


  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer, styles.productsContainer]}>
        <form onSubmit={handleSubmit}>
          {currentStep === 0 && (
            <View>
              <FindPayee formData={formData} handleChange={handleChange} onNext={onNext} />
            </View>
          )}
          {currentStep === 1 && (
            <View>
              <PaymentDetails formData={formData} handleChange={handleChange} onNext={onNext} />
              <button style='btn btn-primary' type="button" onClick={handleBack}>Back</button><br />
            </View>
          )}
          {currentStep === 2 && (
            <View style=''>
              <Confirmation paymentData={formData} />
              <button style='btn btn-primary' type="button" onClick={handleBack}>Back</button><br />
              <button style='btn btn-primary' type="submit">Submit Payment</button>
            </View>
          )}
        </form>
      </View>

    </View>

  );
};
export default PaymentForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:
      'center',
    justifyContent: 'center'
  },
  productsContainer: {
    backgroundColor: '',
    flex: 1,
    alignItems:
      'center',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
});

