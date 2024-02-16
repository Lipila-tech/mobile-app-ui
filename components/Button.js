import { View, Pressable, StyleSheet } from 'react-native';

export default function Button({ onPress, label}) {

    return (
        <View>
            <View style={[styles.buttonContainer, { backgroundColor: 'blue', borderWidth: 25, borderColor: "blue", borderRadius: 20 }]}>
                <Pressable style={[styles.button]} onPress={onPress}>
                    <View style={[styles.buttonLabel]}>{label}</View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 100,
        height: 30,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '50%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: 'white',
        fontSize: 20,
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
