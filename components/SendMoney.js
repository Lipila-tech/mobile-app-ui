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
            <div>
              <FindPayee formData={formData} handleChange={handleChange} onNext={onNext} />
            </div>
          )}
          {currentStep === 1 && (
            <div>
              <PaymentDetails formData={formData} handleChange={handleChange} onNext={onNext} />
              <button className='btn btn-primary' type="button" onClick={handleBack}>Back</button><br />
            </div>
          )}
          {currentStep === 2 && (
            <div className=''>
              <Confirmation paymentData={formData} />
              <button className='btn btn-primary' type="button" onClick={handleBack}>Back</button><br />
              <button className='btn btn-primary' type="submit">Submit Payment</button>
            </div>
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

