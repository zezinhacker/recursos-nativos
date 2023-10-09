import { Alert, Button, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import * as ScreenCapture from 'expo-screen-capture';
import { useEffect } from "react";

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
  useEffect(() => {
    if (hasPermissions()) {
        const subscription = ScreenCapture.addScreenshotListener(() => {
            Alert.alert('Success', 'Screenshot captured')
        });
        return () => subscription.remove();
    }
}, []);

const hasPermissions = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    return status === 'granted';
};

const activate = async () => {
    await ScreenCapture.preventScreenCaptureAsync();
    Alert.alert('Info', 'Screen capture is now blocked')
};

const deactivate = async () => {
    await ScreenCapture.allowScreenCaptureAsync();
    Alert.alert('Info', 'Screen capture is now allowed')
};

return (
    <View style={styles.container}>
        <Header title='Captura de Tela' />
        <View style={styles.center}>
            <Button title="Activate" onPress={activate} />
            <Button title="Deactivate" onPress={deactivate} />
        </View>
    </View>
)
};

