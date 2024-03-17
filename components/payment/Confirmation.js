import { View } from "react-native";

const Confirmation = ({ paymentData }) => {
    return (
        <View style="">
            <p style={styles.h8}>Confirm payment</p>
            <View style={styles.confirmPayInfo}>
                <p><strong>Send</strong>: {paymentData.amount} ZMW</p>
                <p><strong>To</strong>: {paymentData.receiverAccountNumber}</p>
                <p><strong>From</strong>: {paymentData.senderAccountNumber}</p>
                <p><strong>From</strong>: {paymentData.paymentGateWay}</p>
            </View>
            <br />
            <p style={styles.warning}>Click Submit to confirm on your phone</p>
        </View>
    )
}

export default Confirmation;