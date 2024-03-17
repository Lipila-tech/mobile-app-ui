import React, { useState } from 'react';
import PaymentDetails from './PaymentDetails';
import Confirmation from './Confirmation';
import { View } from 'react-native';
import FindPayee from './FindPayee';
import buttonStyles from '../styles/ButtonStyles';
import mainStyles from '../styles/MainStyles';

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
    <View style={mainStyles.container}>
      <View style={[mainStyles.contentContainer, mainStyles.productsContainer]}>
        <form onSubmit={handleSubmit}>
          {currentStep === 0 && (
            <View>
              <FindPayee formData={formData} handleChange={handleChange} onNext={onNext} />
            </View>
          )}
          {currentStep === 1 && (
            <View>
              <PaymentDetails formData={formData} handleChange={handleChange} onNext={onNext} />
              <button style={buttonStyles.btnPrimary} type="button" onClick={handleBack}>Back</button><br />
            </View>
          )}
          {currentStep === 2 && (
            <View>
              <Confirmation paymentData={formData} />
              <button style={buttonStyles.btnPrimary} type="button" onClick={handleBack}>Back</button><br />
              <button style={buttonStyles.btnPrimary} type="submit">Submit Payment</button>
            </View>
          )}
        </form>
      </View>

    </View>

  );
};
export default PaymentForm;