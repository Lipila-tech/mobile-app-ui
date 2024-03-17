import React, { useState } from 'react';
import {
    View, Text,
    StyleSheet, Pressable
} from 'react-native';
import Icon
    from 'react-native-vector-icons/Ionicons';
import ProductCreator from '../components/product/ProductCreator';
import ProductForm from '../components/product/ProductForm';
import ProductButton from '../components/product/ProductButton';
import History from '../components/History';
import { DataTable } from "react-native-paper";
import PaymentForm from '../components/payment/SendMoney';
import Contact from '../components/Contact';

const DashboardApp = () => {
    const [activeSection, setActiveSection] = useState('Home');

    const renderSection = () => {
        switch (activeSection) {
            case 'Profile':
                return <ProfileSection />;
            case 'Settings':
                return <SettingsSection />;
            case 'Payment':
                return <PaymentSection />;
            case 'History':
                return <HistorySection />;
            case 'Contact':
                return <ContactSection />;
            default:
                return <HomeSection />;
        }
    };

    const renderBackButton = () => (
        <Pressable
            onPress={
                () =>
                    setActiveSection('Home')
            } style={styles.backButton}>
            <Icon name="arrow-back"
                size={30} color="#000000" />
            <Text style={styles.backButtonText}>
                Back to Home
            </Text>
        </Pressable>
    );

    const HomeSection = () => (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Good day Pita!</Text>
                <View style={styles.buttonsContainer}>
                    <Pressable onPress=
                        {
                            () =>
                                setActiveSection('Profile')
                        } style={styles.button}>
                        <Icon name="person"
                            size={30} color="white" />
                        <Text style={styles.buttonText}>
                            Profile
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={
                            () =>
                                setActiveSection('Settings')
                        } style={styles.button}>
                        <Icon name="settings"
                            size={30} color="white" />
                        <Text style={styles.buttonText}>
                            Settings
                        </Text>
                    </Pressable>

                </View>
            </View>
            <View style={styles.featuresContainer}>
                <PressableFeatureBox name="Send Money"
                    icon="account" onPress=
                    {
                        () => setActiveSection('Payment')
                    } />
                <PressableFeatureBox name="History"
                    icon="stats-chart" onPress=
                    {
                        () => setActiveSection('History')
                    } />
                <PressableFeatureBox name="Contact"
                    icon="person" onPress=
                    {
                        () => setActiveSection('Contact')
                    } />
            </View>
        </View>
    );
    const ProfileSection = () => (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {renderBackButton()}
                <Text style={styles.headerTitle}>
                    Profile Section
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <Icon name="person" size={80}
                    color="#3498db" />
                <Text style={styles.contentText}>
                    Username: Maniiish
                </Text>
                <Text style={styles.contentText}>
                    Email: manish.pra@example.com
                </Text>

            </View>
        </View>
    );

    const SettingsSection = () => (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {renderBackButton()}
                <Text style={styles.headerTitle}>
                    Settings Section
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <Icon name="settings" size={80}
                    color="#3498db" />
                <Text style={styles.contentText}>
                    Notifications: On
                </Text>
                <Text style={styles.contentText}>
                    Theme: Light
                </Text>

            </View>
        </View>
    );
    const ProductSection = () => {
        const [isModalVisible, setIsModalVisible] = useState(false);

        const onCreateProduct = () => {
            setIsModalVisible(true);
        };

        const onModalClose = () => {
            setIsModalVisible(false);
        }

        return (
            <>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        {renderBackButton()}
                        <Text style={styles.headerTitle}>
                            Products Section
                        </Text>
                    </View>
                    <View style={[styles.contentContainer, styles.productsContainer]}>
                        <ProductCreator isVisible={isModalVisible} onClose={onModalClose}>
                            <ProductForm></ProductForm>
                        </ProductCreator>
                        {!isModalVisible && (
                            <View style={styles.buttonContainer}>
                                <ProductButton onPress={onCreateProduct} />
                            </View>
                        )}
                    </View>

                </View>
            </>
        );
    }

    const PressableFeatureBox = (
        { name, icon,
            onPress
        }
    ) => (
        <Pressable onPress={onPress}
            style={styles.featureBox}>
            <Icon name={icon} size={50}
                color="#3498db" />
            <Text style={styles.featureName}>
                {name}
            </Text>
        </Pressable>
    );
    // My sections
    const ContactSection = () => (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {renderBackButton()}
                <Text style={styles.headerTitle}>
                    Contact Us.
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <Contact />
            </View>
        </View>
    );
    const PaymentSection = () => (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {renderBackButton()}
                <Text style={styles.headerTitle}>
                    Send Money
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <PaymentForm />
            </View>
        </View>
    );

    const HistorySection = () => (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {renderBackButton()}
                <Text style={styles.headerTitle}>
                    Transactions
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <History />
                <Text style={styles.contentTitle}>
                    Transaction History
                </Text>
                <DataTable style={styles.container}>
                    <DataTable.Header style={styles.tableHeader}>
                        <DataTable.Title>Name</DataTable.Title>
                        <DataTable.Title>Favourite Food</DataTable.Title>
                        <DataTable.Title>Age</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>Radhika</DataTable.Cell>
                        <DataTable.Cell>Dosa</DataTable.Cell>
                        <DataTable.Cell>23</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Krishna</DataTable.Cell>
                        <DataTable.Cell>Uttapam</DataTable.Cell>
                        <DataTable.Cell>26</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Vanshika</DataTable.Cell>
                        <DataTable.Cell>Brownie</DataTable.Cell>
                        <DataTable.Cell>20</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Teena</DataTable.Cell>
                        <DataTable.Cell>Pizza</DataTable.Cell>
                        <DataTable.Cell>24</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </View>
    );

    const PaymentItem = (
        {
            title,
            description
        }) => (
        <View style={styles.paymentItem}>
            <Text style={styles.paymentTitle}>
                {title}
            </Text>
            <Text style={styles.paymentDescription}>
                {description}
            </Text>
        </View>
    );
    return <View style={styles.container}>
        {renderSection()}
    </View>;
};


const styles = StyleSheet.create({
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
        height: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    featureBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        aspectRatio: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,
    },
    featureName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
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
        fontWeight: 'bold',
        color: '#333',
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
});
export default DashboardApp;


