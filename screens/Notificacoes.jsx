import { View, StyleSheet, Text, Button } from "react-native";
import * as Notification from "expo-notifications";
import * as Device from "expo-device";
import * as Battery from 'expo-battery';
import Header from "../components/Header";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
});

export default function Notify({ navigation }) {
    const [expoToken, setExpoToken] = useState("");

    const [nivelBateria, setNivelBateria] = useState();
    const [statusBateria, setStatusBateria] = useState();

    async function atualizarTudo() {
        bateria();
    }

    async function status() {
        const status = await Battery.getBatteryStateAsync();
        setStatusBateria(status);
    }

    async function bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(nivel * 100);
    }

    useEffect(() => {
        bateria();
        status();
    }, []);

    async function notificacaoBateria(){
        const token = await Notification.scheduleNotificationAsync({
            content: {
                title: "Nivel da bateria",
                subtitle: "Bateria",
                body: nivelBateria+"%",
            },
            trigger: { seconds: 3 },
        })
        setExpoToken(token);
    }

    async function notificacaoAlertaBateria(){
        alert ("Nivel da bateria: "+nivelBateria+"%")
    }

    async function notificacaoPagina(){
      const token = await Notification.scheduleNotificationAsync({
          content: {
              title: "Proxima Pagina",
              subtitle: "Proxima",
              body: "",

          },
          trigger: { seconds: 3 },
      })
  }

    async function notificacaoMensagem(){
        const token = await Notification.scheduleNotificationAsync({
            content: {
                title: "Mensagem aleatoria",
                subtitle: "Aleatorio",
                body: "valorant",
            },
            trigger: { seconds: 3 },
        })
    }
    async function notificacaoAparelho(){
        const token = await Notification.scheduleNotificationAsync({
            content: {
                title: "Aparelho",
                subtitle: "Motorola. BOMBOM ieeeeeeeeeeee",
                body: "O seu aparelho "+Device.modelName+" é incrivel",
            },
            trigger: { seconds: 3 },
        })
        setExpoToken(token);
    }
    async function notificacaoAgenda(){
        const token = await Notification.scheduleNotificationAsync({
            content: {
                title: "Mensagem agendada",
                subtitle: "Agendada",
                body: "valorant agendado",
            },
            trigger: { seconds: 10 },
        })
    }

  return (
    <View style={styles.container}>
      <Header title="Notificações" />
      <View>
        <Text>Notify</Text>
      </View>
      <View>
        <Text>Token: {expoToken}</Text>
        <Button
          title="Enviar Notificação"
          onPress={async () => notificacaoMensagem ()}
        />
               <Button
          title="Enviar Alerta Da Notificação"
          onPress={async () => notificacaoAlertaBateria ()}
        />
                <Button
          title="Enviar Notificação da Bateria"
          onPress={async () => notificacaoBateria ()}
        />
                        <Button
          title="Enviar para outra pagina"
          onPress={async () => notificacaoPagina ()}
        />
                      <Button
          title="Agendar Notificação"
          onPress={async () => notificacaoAgenda ()}
        />
      </View>
    </View>
  );
}


