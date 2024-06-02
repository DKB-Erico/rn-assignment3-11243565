import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const categories = [
    { key: 1, name: "Exercise", imgSrc: require("../assets/exercise.png") },
    { key: 2, name: "Study", imgSrc: require("../assets/img1.png") },
    { key: 3, name: "Code", imgSrc: require("../assets/code.png")},
    { key: 4, name: "Meditate", imgSrc: require("../assets/meditate.png") },
    { key: 5, name: "Cook", imgSrc: require("../assets/cook.png") },
    { key: 6, name: "Clean", imgSrc: require("../assets/clean.png") },
    { key: 7, name: "Play", imgSrc: require("../assets/play.png") },
    { key: 8, name: "Rest", imgSrc: require("../assets/rest.png") }
];

const renderCategories = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.bigText}>{item.name}</Text>
            <Text>12 Tasks</Text>
            <View style={styles.img}>
                <Image source={item.imgSrc} style={styles.imgStyle} resizeMode="contain" />
            </View>
        </View>
    );
};

export default function CategorySection() {
    return (
        <View style={styles.container}>
            <Text style={styles.category}>Categories</Text>
            <FlatList
                contentContainerStyle={styles.hList}
                data={categories}
                renderItem={renderCategories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.key.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flex: 1,
        padding: 0,
    },
    category: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        borderRadius: 20,
        marginTop: -5,
        width: "77%",
    },
    hList: {
        paddingVertical: 10,
    },
    itemContainer: {
        backgroundColor: "white",
        marginRight: 20,
        width: 190,
        height: 190,
        borderRadius: 20,
        padding: 20,
    },
    bigText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    img: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    imgStyle: {
        width: "80%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
});
