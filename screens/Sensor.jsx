import { Gyroscope, Magnetometer } from "expo-sensors";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
});

export default function Sensors({ navigation }) {
    const [ giroscopio, setGiroscopio ] = useState ({})
    const [ magneto, setMagneto ] = useState ({})

    useEffect(() => {
        Gyroscope.addListener(giroscopioListner);
        Magnetometer.addListener(magnetoListner);
    }, [])

    const giroscopioListner = (data) => {
        setGiroscopio(data)
    }
    const magnetoListner = (data) => {
        setMagneto(data)
    }


return (
    <View style={styles.container}>
        <Header
            title="Sensores"/>
        <View 
            style={styles.content}
            >
                    <Text style={styles.sensor}>
                        Giroscopio: {'\n'}
                        x: {giroscopio.x} {'\n'}
                        y: {giroscopio.y} {'\n'}
                        z: {giroscopio.z} {'\n'}
                    </Text>
                    <Text style={styles.sensor}>
                        Magnetometro: {'\n'}
                        x: {magneto.x} {'\n'}
                        y: {magneto.y} {'\n'}
                        z: {magneto.z} {'\n'}
                    </Text>
            </View>
    </View>
)
}