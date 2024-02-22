import React, { useState} from 'react';
import PaymentDetails from '../components/PaymentDetails';
import Confirmation from '../components/Confirmation';
import { View, StyleSheet} from 'react-native';

const PaymentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    amount: '',
    senderAccountNumber: '',
    receiverAccountNumber: '',
    description: '',
  });


  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent default form submission
    onSubmit(formData);      // Call the onSubmit callback from the parent
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onNext = () => {
    setCurrentStep(2);
  };


  return (
    <View style={styles.container}>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <PaymentDetails formData={formData} handleChange={handleChange} onNext={onNext} />
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
})
