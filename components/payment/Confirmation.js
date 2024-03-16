const Confirmation = ({ paymentData }) => {
    return (
        <div className="">
            <p className="h8 py-3">Confirm payment</p>
            <div className="confirm-info">
                <p><strong>Send</strong>: {paymentData.amount} ZMW</p>
                <p><strong>To</strong>: {paymentData.receiverAccountNumber}</p>
                <p><strong>From</strong>: {paymentData.senderAccountNumber}</p>
                <p><strong>From</strong>: {paymentData.paymentGateWay}</p>
            </div>
            <br />
            <p className="warning">Click Submit to confirm on your phone</p>
        </div>
    )
}

export default Confirmation;