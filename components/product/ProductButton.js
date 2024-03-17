import { View, Pressable} from 'react-native';
import { useHover} from "react-native-web-hooks";
import buttonStyles from '../styles/ButtonStyles';

export default function ProductButton({ onPress }) {
    const isHovered = useHover(null);

    return (
        <View>
            <View style={[buttonStyles.buttonContainer, { backgroundColor: 'blue', borderWidth: 25, borderColor: "blue", borderRadius: 20 }]}>
                <Pressable style={[buttonStyles.buttonProduct]} onPress={onPress}>
                    <View style={[buttonStyles.buttonLabel]}>Create Product</View>
                </Pressable>
            </View>
        </View>
    );
}
