import { View, Text, StyleSheet, Image } from "react-native";

export default function App() {
    return (
        <View style={styles.frameContainer}>
            <View>
                <Text style={styles.bigText1}>Hello , Devs</Text>
                <Text style={styles.bigText2}>14 tasks today</Text>
            </View>
            <View style={styles.imgStyles}>
                <Image source={require("../assets/person.png")}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    frameContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection:'row',
        width: '90%',
        borderColor:'black',
        marginVertical: 10,
    },
    bigText1:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    bigText2:{
        fontSize: 13,
    },
    imgStyles:{
        backgroundColor:'white',
        borderRadius: 50,
        width: 50,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
    },
});