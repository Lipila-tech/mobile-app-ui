import { View, Text } from "react-native";
import { DataTable } from "react-native-paper";
import mainStyles from "./styles/MainStyles";

const History = () => (

    <View style={mainStyles.contentContainer}>
        <Text style={mainStyles.contentTitle}>
            Your Transactions
        </Text>
        <DataTable style={mainStyles.container}>
            <DataTable.Header style={mainStyles.tableHeader}>
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