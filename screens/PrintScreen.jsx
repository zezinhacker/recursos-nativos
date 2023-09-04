import { Button, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import * as ScreenCapture from 'expo-screen-capture';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f224",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    backgroundColor: "#939",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
    padding: 15,
  },
  info: {
    fontSize: 14,       
    backgroundColor: "#ff12",
    color: "#fff",
    marginBottom: 15,
    padding: 15,

  },
  
});

export default function PrintScreen({ navigation }) {
    const active = async () => {
        await ScreenCapture.preventScreenCaptureAsync();
    }
    const deactive = async () => {
        await ScreenCapture.allowScreenCaptureAsync();
    }
  return (
    <View style={styles.container}>
      <Header title="Captura de tela" />
      <View style={styles.container}>
        <Button title="Ativar" onPress={active}/>
        <Button title="Desativar" onPress={deactive}/>
      </View>
    </View>
  );
}
