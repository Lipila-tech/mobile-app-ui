import { StyleSheet } from 'react-native';


const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#3498db',
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 5,
    },
    productsContainer: {
        backgroundColor: 'white',
        flex: 1,
        alignItems:
            'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2ecc71',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    featuresContainer: {
        margin: "auto",
        width: "50%",
        height: "50%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    featureBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#3498db',
        borderWidth: 2,
        margin: 3,
        padding: 0,
        backgroundColor: '#3478db',
    },
    featureName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButtonText: {
        color: '#3498db',
        fontSize: 16,
        marginLeft: 10,
    },
    contentContainer: {
        flex: 1,
        padding: 20,
    },
    contentText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555',
    },
    contentTitle: {
        fontSize: 20,
        fontWeight: 'light',
        color: '#aaa',
        marginBottom: 10,
    },
    paymentItem: {
        backgroundColor: '#3498db',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
    },
    paymentTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paymentDescription: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
    },
    modalContent: {
        margin: 'auto',
        width: '50%',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
    },
    titleContainer: {
        height: '16%',
        backgroundColor: '#464C55',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 16,
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingVertical: 20,
    },

})

export default mainStyles;