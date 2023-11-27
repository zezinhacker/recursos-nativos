import { View, StyleSheet, Text } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Seja Bem-vindo ao Nosso App</Text>
            <Text>Equipe: Pedro e Luiz</Text>
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