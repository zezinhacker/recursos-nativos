import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication'
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

export default function MyLocalAuthentication( navigation ) { 
    const autenticar = async () => {
        try{
            const disponivel = await LocalAuthentication.hasHardwareAsync();

            if(!disponivel){
                alert('Você n tem isso')
                return
            }
            const { sucess, error } =  await LocalAuthentication.authenticationAsync()
            if(sucess){
                alert("acessa ai");
            } else {
                alert("Nao acessa ai")
            }
        } catch (error) {
            console.log(error)
        }
    };


  return (
    <View style={styles.container}>
      <Header title="Atentificação"/>
        <View>
            <TouchableOpacity styles={styles.button}>
                <Text style={styles.text}>Autenticar</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
