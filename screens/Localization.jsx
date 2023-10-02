import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from 'expo-location';


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

export default function location({ navigation }) {
    const [ location, setLocation ] = useState(null)

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForeGroundPermissionAsync();
        if  (status !== 'granted') {
          console.log('nao tem permissao')
          return;
        }

        let info = await Location.getCurrentPositionAsync({})
        console.log(location)
        setLocation(info)
      })()
    }, [])


  return (
      <View>
        <View>
          {
            !location
            ? (<Text>Carregando...</Text>)
            : (
              <Text>
                Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
              </Text>
            )
          }
        </View>
      </View>
  );
}
