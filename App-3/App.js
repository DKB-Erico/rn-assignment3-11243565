import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from "./Tasks/SearchBar";
import Frame from "./Tasks/Frame";
import Categories from "./Tasks/Categories";

export default function App() {
  return (
      <ScrollView>
    <View style={styles.container}>
      <Frame/>
      <SearchBar/>
      <Categories/>
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
