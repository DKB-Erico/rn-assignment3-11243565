import React from "react";
import { View, Text, StyleSheet } from "react-native";

const tasks = [
    { key: 1, name: 'Mobile App Development' },
    { key: 2, name: 'Web Development' },
    { key: 3, name: 'Push Ups' },
    { key: 4, name: 'Yoga' },
    { key: 5, name: 'Order Fries' },
    { key: 6, name: 'Clean the Balcony' },
    { key: 7, name: 'Play Football Manager' },
    { key: 8, name: 'Take a Nap' },
    { key: 9, name: 'Organize Schedule' },
    { key: 10, name: 'Reply Messages' },
    { key: 11, name: 'Call Girlfriend' },
    { key: 12, name: 'Take a Walk' },
    { key: 13, name: 'Analyze Data' },
    { key: 14, name: 'Regret Life Choices' },
    { key: 15, name: 'Stare At The Sunset' },
];

export default function CategoryList() {
    return (
        <View style={styles.container}>
            <Text style={styles.biggerText}>Ongoing Tasks</Text>
            <View style={styles.listContainer}>
                {tasks.map(task => (
                    <View style={styles.itemTaskContainer} key={task.key}>
                        <Text style={styles.bigText}>{task.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        width: "90%",
        flex: 1,
        padding: 0,
    },
    listContainer: {
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        flexGrow: 1,
        paddingBottom: 800,
    },
    itemTaskContainer: {
        height: '7%',
        width: "100%",
        marginBottom: 20,
        padding: 25,
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: '#E8D1BA',
        borderRadius: 20,
        justifyContent: 'center',
    },
    bigText: {
        fontWeight: "bold",
        fontSize: 15,
    },
    biggerText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 6,
    },
});
