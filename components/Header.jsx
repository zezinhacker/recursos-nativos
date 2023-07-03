import { Button, StyleSheet, View } from "react-native";



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
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    footer: {
        backgroundColor: '#989',
        paddingHorizontal: 25,
        padding: 20,
    }
});
export default function Header() {
    return <View></View>
}