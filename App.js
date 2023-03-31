import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home';
import NavBar from './pages/navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar/> 
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:18
  },
});
