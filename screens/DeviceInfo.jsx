import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as Device from 'expo-device'
import Header from "../components/Header";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2243546",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    backgroundColor: "#939",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    padding: 10,
  },
  info: {
    fontSize: 14,       
    backgroundColor: "#ff124545",
    color: "#fff",
    marginBottom: 10,
    padding: 15,

  },
  
});

export default function DeviceInfo() {
  return (
    <View style={styles.container}>
      <Header title="Informações do cell"/>
    <View>
      <ScrollView>
      <Text style={styles.info}>
        O nome do dispositivo: {Device.deviceName}
      </Text>
      <Text style={styles.info}>
        Seu dispositivo é: {Device.brand}
      </Text>
      <Text style={styles.info}>
        O modelo do seu dispositivo: {Device.modelName} 
      </Text>
      <Text style={styles.info}>
        A versão do dispositovo: {Device.osVersion}
      </Text>
      <Text style={styles.info}>
        A memória total do dispositivo: {Device.totalMemory}
      </Text>
      <Text style={styles.info}>
        O dispositivo é um tablet? {Device.isTablet ? "Sim" : "Não"}
      </Text> 
      <Text style={styles.info}>
        O dispositivo é um celular? {Device.isPhone ? "Sim" : "Não"}
      </Text>
      <Text style={styles.info}>
        O dispositivo é um emulador? {Device.isDevice ? "Sim" : "Não"}
      </Text>
      <Text style={styles.info}>
        A arquitetura do dispositivo: {Device.osBuildId}
      </Text>
      <Text style={styles.info}>
        O ano de fabricação do dispositivo: {Device.deviceYearClass}
      </Text>
      <Text style={styles.info}>
        o design do dispositivo: {Device.designName}
      </Text>
      </ScrollView>
    </View>
    </View>
  );
}
