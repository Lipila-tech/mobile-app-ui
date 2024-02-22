import React from 'react';

const PaymentDetails = ({ formData, handleChange, onNext }) => {
  return (
    <div className="">
      <p className="h8 py-3">Payment Details</p>
      <div className="row gx-3">
        <div className='col-12'>
          <div className='d-flex flex-column'>
            <label className='text mb-1' htmlFor="amount">Amount:</label>
            <input
              className='form-control mb-3'
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              placeholder='Ex: 100'
            />
          </div>
        </div>
        <div className="col-12">
          <div className='d-flex flex-column'>
            <label className='text mb-1' htmlFor="senderAccountNumber">Sender Account Number:</label>
            <input
              className='form-control mb-3'
              type="text"
              id="senderAccountNumber"
              name="senderAccountNumber"
              value={formData.senderAccountNumber}
              onChange={handleChange}
              required
              placeholder='Ex: 0969445566'
            />
          </div>
        </div>
        <div className="col-12">
          <div className='d-flex flex-column'>
            <label className='text mb-1' htmlFor="receiverAccountNumber">Receiver Account Number:</label>
            <input
              className='form-control mb-3'
              type="text"
              id="receiverAccountNumber"
              name="receiverAccountNumber"
              value={formData.receiverAccountNumber}
              onChange={handleChange}
              required
              placeholder='Ex: 0966443377'
            />
          </div>
        </div>
        <div className="col-12">
          <div className='d-flex flex-column'>
            <label className='text mb-1' htmlFor="description">Description:</label>
            <input
              className='form-control mb-3'
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder='Ex: Payment for the laptop...'
            />
          </div>
        </div>
        <div className='"col-12'>
          <div className="form-group">
            <label htmlFor="paymentMethod">Select Payment Method:</label>
            <select className="form-control" id="paymentMethod">
              <option value="MTN">MTN</option>
              <option value="Airtel">Airtel</option>
            </select>
          </div>

        </div>

        <div className='col-12'>
          <button type="submit" className="btn btn-primary mb-2" onClick={onNext}>Next</button>
        </div>

      </div>
    </div>
  );
};

export default PaymentDetails;
