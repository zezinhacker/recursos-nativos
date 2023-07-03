import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45677",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    backgroundColor: "#939",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    padding: 10,
  },
  info: {
    fontSize: 14,       
    backgroundColor: "#5e4d85",
    color: "#fff",
    marginBottom: 10,
    padding: 15,

  },
});

async function padrao(){
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT
    )
}
async function Down(){
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    )
}
async function Direita(){
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    )
}
async function Esquerda(){
    await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    )
}

export default function MyScreenOrientation() {
  return (
    <View>
      <ScrollView>
        <Text style={styles.title}>INFORMAÇÕES DO TELA</Text>
        <Button title="padrao" onPress={padrao}/>
        <Button title="baixo" onPress={Down}/>
        <Button title="direita" onPress={Direita}/>
        <Button title="esquerda" onPress={Esquerda}/>
      </ScrollView>
    </View>
  );
}
