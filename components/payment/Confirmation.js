import { View } from "react-native";
import mainStyles from "../styles/MainStyles";

const Confirmation = ({ paymentData }) => {
    return (
        <View style={mainStyles.container}>
            <p style={mainStyles.h8}>Confirm payment</p>
            <View style={mainStyles.confirmPayInfo}>
                <p><strong>Send</strong>: {paymentData.amount} ZMW</p>
                <p><strong>To</strong>: {paymentData.receiverAccountNumber}</p>
                <p><strong>From</strong>: {paymentData.senderAccountNumber}</p>
                <p><strong>From</strong>: {paymentData.paymentGateWay}</p>
            </View>
            <br />
            <p style={mainStyles.warning}>Click Submit to confirm on your phone</p>
        </View>
    )
}

export default Confirmation;