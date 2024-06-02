import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from "./Tasks/SearchBar";

export default function App() {
  return (
      <ScrollView>
    <View style={styles.container}>
      <SearchBar/>
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
