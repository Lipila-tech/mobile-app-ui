import { View, Pressable, StyleSheet } from 'react-native';
import { useHover} from "react-native-web-hooks";

export default function CircleButton({ onPress }) {
    const isHovered = useHover(null);

    return (
        <View>
            <View style={[styles.buttonContainer, { backgroundColor: 'blue', borderWidth: 25, borderColor: "blue", borderRadius: 20 }]}>
                <Pressable style={[styles.button]} onPress={onPress}>
                    <View style={[styles.buttonLabel]}>Create Product</View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 230,
        height: 50,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    hover: {
        color: 'green',
        backgroundColor: 'green',
        transition: "all 100ms ease",
        transform: "scale(1.05)",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)"
      },
    
});
