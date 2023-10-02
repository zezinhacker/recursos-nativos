import { Button, View, StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title='Informações do Dispositivo' onPress={() => navigation.navigate('DeviceInfo')} />
            <Button title='Informações da bateria' onPress={() => navigation.navigate('BateriaScreen')} />
            <Button title='Controles de tela' onPress={() => navigation.navigate('MyScreenOrientation')}/>
            <Button title='Notificaçoes' onPress={() => navigation.navigate('Notificacoes')}/>
            <Button title='ContactsInfo' onPress={() => navigation.navigate('ContactsInfo')}/>
            <Button title='Sensor' onPress={() => navigation.navigate('Sensor')}/>
            <Button title='PrintScreen' onPress={() => navigation.navigate('PrintScreen')}/>
            <Button title='Autentificação' onPress={() => navigation.navigate('LocalAuthentication')}/>
            <Button title='Camera' onPress={() => navigation.navigate('CameraInfo')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1284',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;