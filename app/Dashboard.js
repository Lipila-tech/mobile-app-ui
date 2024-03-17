import React, { useState } from 'react';
import {
    View, Text, Pressable
} from 'react-native';
import ProductCreator from '../components/product/ProductCreator';
import ProductForm from '../components/product/ProductForm';
import ProductButton from '../components/product/ProductButton';
import History from '../components/History';
import PaymentForm from '../components/payment/SendMoney';
import Contact from '../components/Contact';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import mainStyles from '../components/styles/MainStyles';


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
            } style={mainStyles.backButton}>
            <AntDesign name="back"
                size={40} color="#000000" />
            <Text style={mainStyles.backButtonText}>
                Back to Home
            </Text>
        </Pressable>
    );

    const HomeSection = () => (
        <View style={mainStyles.container}>
            <View style={mainStyles.headerContainer}>
                <Text style={mainStyles.headerTitle}>Good day Pita!</Text>
                <View style={mainStyles.buttonsContainer}>
                    <Pressable onPress=
                        {
                            () =>
                                setActiveSection('Profile')
                        } style={mainStyles.button}>
                        <AntDesign name="profile"
                            size={30} color="white" />
                        <Text style={mainStyles.buttonText}>
                            Profile
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={
                            () =>
                                setActiveSection('Settings')
                        } style={mainStyles.button}>
                        <AntDesign name="setting"
                            size={30} color="white" />
                        <Text style={mainStyles.buttonText}>
                            Settings
                        </Text>
                    </Pressable>

                </View>
            </View>
            <View style={mainStyles.featuresContainer}>
                <PressableFeatureBox name="Send Money"
                    icon="money" onPress=
                    {
                        () => setActiveSection('Payment')
                    } />
                <PressableFeatureBox name="History"
                    icon="history" onPress=
                    {
                        () => setActiveSection('History')
                    } />
                <PressableFeatureBox name="Contact Us"
                    icon="phone" onPress=
                    {
                        () => setActiveSection('Contact')
                    } />
            </View>
        </View>
    );
    const PressableFeatureBox = (
        { name, icon,
            onPress
        }
    ) => (
        <Pressable onPress={onPress}
            style={mainStyles.featureBox}>
            <FontAwesome name={icon} size={50}
                color="#fff" />
            <Text style={mainStyles.featureName}>
                {name}
            </Text>
        </Pressable>
    );
    const ProfileSection = () => (
        <View style={mainStyles.container}>
            <View style={mainStyles.headerContainer}>
                {renderBackButton()}
                <Text style={mainStyles.headerTitle}>
                    Profile Section
                </Text>
            </View>
            <View style={mainStyles.contentContainer}>
                <AntDesign name="profile" size={80}
                    color="#3498db" />
                <Text style={mainStyles.contentText}>
                    Username: Maniiish
                </Text>
                <Text style={mainStyles.contentText}>
                    Email: manish.pra@example.com
                </Text>

            </View>
        </View>
    );

    const SettingsSection = () => (
        <View style={mainStyles.container}>
            <View style={mainStyles.headerContainer}>
                {renderBackButton()}
                <Text style={mainStyles.headerTitle}>
                    Settings Section
                </Text>
            </View>
            <View style={mainStyles.contentContainer}>
                <AntDesign name="setting" size={80}
                    color="#3498db" />
                <Text style={mainStyles.contentText}>
                    Notifications: On
                </Text>
                <Text style={mainStyles.contentText}>
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
                <View style={mainStyles.container}>
                    <View style={mainStyles.headerContainer}>
                        {renderBackButton()}
                        <Text style={mainStyles.headerTitle}>
                            Products Section
                        </Text>
                    </View>
                    <View style={[styles.contentContainer, styles.productsContainer]}>
                        <ProductCreator isVisible={isModalVisible} onClose={onModalClose}>
                            <ProductForm></ProductForm>
                        </ProductCreator>
                        {!isModalVisible && (
                            <View style={mainStyles.buttonContainer}>
                                <ProductButton onPress={onCreateProduct} />
                            </View>
                        )}
                    </View>

                </View>
            </>
        );
    }

    // My sections
    const ContactSection = () => (
        <View style={mainStyles.container}>
            <View style={mainStyles.headerContainer}>
                {renderBackButton()}
                <Text style={mainStyles.headerTitle}>
                    Contact Us.
                </Text>
            </View>
            <View style={mainStyles.contentContainer}>
                <Contact />
            </View>
        </View>
    );
    const PaymentSection = () => (
        <View style={mainStyles.container}>
            <View style={mainStyles.headerContainer}>
                {renderBackButton()}
                <Text style={mainStyles.headerTitle}>
                    Send Money
                </Text>
            </View>
            <View style={mainStyles.contentContainer}>
                <PaymentForm />
            </View>
        </View>
    );

    const HistorySection = () => (
        <View style={mainStyles.container}>
            <View style={mainStyles.headerContainer}>
                {renderBackButton()}
                <Text style={mainStyles.headerTitle}>
                    Transactions
                </Text>
            </View>
            <View style={mainStyles.contentContainer}>
                <History />
            </View>
        </View>
    );

    const PaymentItem = (
        {
            title,
            description
        }) => (
        <View style={mainStyles.paymentItem}>
            <Text style={mainStyles.paymentTitle}>
                {title}
            </Text>
            <Text style={mainStyles.paymentDescription}>
                {description}
            </Text>
        </View>
    );
    return <View style={mainStyles.container}>
        {renderSection()}
    </View>;
};

export default DashboardApp;