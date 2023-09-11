import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
            console.log(disponivel)
            if(!disponivel){
                alert('Você n tem isso')
                return
            }
            const { sucess, error } =  await LocalAuthentication.authenticateAsync()

            if(sucess){
                alert("acessa ai");
            } else {
                console.log(error)
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
                <Button title="Autenticar" onPress={autenticar}/>
            </TouchableOpacity>
        </View>
    </View>
  );
}

