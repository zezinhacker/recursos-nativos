import { View, StyleSheet, Text, Button } from "react-native";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import * as Battery from "expo-battery";

export default function BateriaScreen({navigation}){
    const [nivelBateria, setNivelBateria] = useState()
    const [background, setBackground] = useState()
    const [textoBateria, setTextoBateria ] = useState('')
    
    const mudarCor = () => {
        if(nivelBateria < 20){
            setBackground("#fc0b03")
            setTextoBateria("Bateria Fraca")
        } else if (nivelBateria < 50){
            setBackground("#fca903")
            setTextoBateria("Bateria OK")
        } else if (nivelBateria < 80){
            setBackground("#fcf803")
            setTextoBateria("Bateria parcialmente carregada")
        } else {
            setBackground("#1cfc03")
            setTextoBateria("Bateria carregada")
        }
    }

    const stylesBatery = StyleSheet.create({
        container: {
            flex: 1,
            gap: 10
        },
        content: {
            flex: 1,
            gap: 20,
            padding: 20,
            alignSelf: 'center',
            fontSize: 30
        },
        
    });
    async function atualizarTudo(){
        bateria()
    }

    async function bateria(){
        const nivel = await Battery.getBatteryLevelAsync()
        setNivelBateria(nivel * 100)
    }

    useEffect(() => {
        bateria()
        mudarCor()
    }, [nivelBateria])

    function atualizarTudo() {
        bateria()
        mudarCor()
    }

    return (
        <View>
            <Header title="Bateria"/>
            <Text>{nivelBateria}%</Text>
            <View style={{backgroundColor: background, width: 800, height: 50}}>
                <Text>{textoBateria}</Text>
            </View>
            <Button title="Atualizar" onPress={atualizarTudo} />
        </View>
    )
}
