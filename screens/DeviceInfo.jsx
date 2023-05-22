import { Text, View } from "react-native";
import * as Device from 'expo-device'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    content: {
        flex: 1,
        gap: 20,
        padding: 20,
        alignSelf: 'center',
    },
    contentTextStyle: {
        padding: 5,
        textAlignVertical: 'center',
        minHeight: 50,
        backgroundColor: '#969',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    footer: {
        backgroundColor: '#888',
        paddingHorizontal: 25,
        padding: 20,
    }
});

export default function DeviceInfo () {
    return(
        <View>
            <Text>
                o seu dispositivo é:
                {Device.modelName}
            </Text>
            <Text>
                A marca do seu dispositivo é:
                {Device.modelId}
            </Text>
            <Text>
                O modelo do dispositivo é:
                {Device.DeviceType}
            </Text>
            <Text>
                O nome completo do seu dispositivo é:
                {Device.designName}
            </Text>
            <Text>
                o desing do seu dispositivo é:
                {Device.osBuildId}
            </Text>
            <Text>
                o ano de lançamento do seu dispositivo é:
                {Device.osBuildId}
            </Text>
            <Text>
                A memoria do seu dispositivo é:
                {Device.osBuildId}
            </Text>
            <Text>
                A versao do seu sistema é:
                {Device.osBuildId}
            </Text>
            <Text>
                arquiteruta do seu dispositivo é:
                {Device.osBuildId}
            </Text>
        </View>
    )
}