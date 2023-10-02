import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Camera } from 'expo-camera';

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

export default function CameraInfo({ navigation }) {
  const [ hasPermission, setHasPermission ] = useState(null)
  const [ cameraRef, setCameraRef ] = useState(null)
  const[ type, setType ] = useState(Camera.Constants.Type.back);

  useEffect (() => {
    (async () => {
      const { status } = Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted');
    })();
  }, [])

  if(hasPermission == null){
    return(<View />)
  }

  if(hasPermission == false){
    return(<Text/>)
  }


  return (
    <View>
        <Camera
          ref={(ref) => setCameraRef(ref)}
          type={type}
          ratio="4:3"
          zoom={0}
        />
    </View>
  )
  
}
