import { Modal, View, Text, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import mainStyles from '../styles/MainStyles';


export default function ProductCreator({ isVisible, children, onClose }) {

    return (
        <Modal animationType="fade" transparent={true} visible={isVisible}>
            <View style={mainStyles.modalContent}>
                <View style={mainStyles.titleContainer}>
                    <Text style={mainStyles.title}>Add a Product</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#888" size={22} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    );
}