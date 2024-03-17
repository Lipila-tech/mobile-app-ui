const Confirmation = ({ paymentData }) => {
    return (
        <View style="">
            <p style="h8 py-3">Confirm payment</p>
            <View style="confirm-info">
                <p><strong>Send</strong>: {paymentData.amount} ZMW</p>
                <p><strong>To</strong>: {paymentData.receiverAccountNumber}</p>
                <p><strong>From</strong>: {paymentData.senderAccountNumber}</p>
                <p><strong>From</strong>: {paymentData.paymentGateWay}</p>
            </View>
            <br />
            <p style="warning">Click Submit to confirm on your phone</p>
        </View>
    )
}

export default Confirmation;