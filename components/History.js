import { View, Text, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

const History = () => (

    <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>
            Your Transactions
        </Text>
        <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title>Sent</DataTable.Title>
                <DataTable.Title>To</DataTable.Title>
                <DataTable.Title>Date</DataTable.Title>
                <DataTable.Title>Status</DataTable.Title>
                <DataTable.Title>Description</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
                <DataTable.Cell>34</DataTable.Cell>
                <DataTable.Cell>Zyambo</DataTable.Cell>
                <DataTable.Cell>12/03/2023</DataTable.Cell>
                <DataTable.Cell>Successful</DataTable.Cell>
                <DataTable.Cell>Great Content</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>34</DataTable.Cell>
                <DataTable.Cell>Lipila</DataTable.Cell>
                <DataTable.Cell>12/03/2023</DataTable.Cell>
                <DataTable.Cell>Successful</DataTable.Cell>
                <DataTable.Cell>Great Content</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>34</DataTable.Cell>
                <DataTable.Cell>MazaComedy</DataTable.Cell>
                <DataTable.Cell>12/03/2023</DataTable.Cell>
                <DataTable.Cell>Successful</DataTable.Cell>
                <DataTable.Cell>Great Content</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>34</DataTable.Cell>
                <DataTable.Cell>ShiMumbi</DataTable.Cell>
                <DataTable.Cell>12/03/2023</DataTable.Cell>
                <DataTable.Cell>Successful</DataTable.Cell>
                <DataTable.Cell>Great Content</DataTable.Cell>
            </DataTable.Row>
        </DataTable>
    </View>
);

export default History;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productsContainer: {
        backgroundColor: '',
        flex: 1,
        alignItems:
            'center',
        justifyContent: 'center'
    },
    contentContainer: {
        flex: 1,
        padding: 20,
    },
});

