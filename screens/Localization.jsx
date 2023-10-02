import { ScrollView, StyleSheet, Text, View } from "react-native";


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
        
    </View>
  );
}
