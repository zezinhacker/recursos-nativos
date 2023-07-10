import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import Header from "../components/Header";

export default function MyScreenOrientation({ navigation }) {
  const [backgroundColor, setBackgroundColor] = useState("white");
  useEffect(() => {
    setOrientationColor();
    ScreenOrientation.addOrientationChangeListener(setOrientationColor);
    return () => {
      ScreenOrientation.removeOrientationChangeListener(setOrientationColor);
    };
  }, []);

  async function setOrientationColor() {
    const orientation = await ScreenOrientation.getOrientationAsync();

    switch (orientation) {
      case ScreenOrientation.Orientation.PORTRAIT_DOWN:
        setBackgroundColor("Lightblue");
        break;
      case ScreenOrientation.Orientation.PORTRAIT_UP:
        setBackgroundColor("grey");
        break;
      case ScreenOrientation.Orientation.LANDSCAPE_LEFT:
        setBackgroundColor("Pink");
        break;
      case ScreenOrientation.Orientation.LANDSCAPE_RIGHT:
        setBackgroundColor("lightyellow");
        break;
        case ScreenOrientation.Orientation.DEFAULT:
        setBackgroundColor("lightgrey");
        break;
    }
  }

  async function padrao() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.DEFAULT
    );
    setBackgroundColor("lightblue");
  }

  async function padrao1() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_DOWN
    );
    setBackgroundColor("grey");
  }

  async function padrao2() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
    setBackgroundColor("pink");
  }

  async function padrao3() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
    setBackgroundColor("lightgreen");
  }

  async function padrao4() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    setBackgroundColor("lightyellow");
  }

  return (
    <View style={{ height: "100%" }}>
      <Header title="Orientação da tela"/>
      <View style={[styles.container, { backgroundColor }]}>
        <View style={{ justifyContent: "center", alignContent: "center" }}>
          <View style={{ marginBottom: 30 }} />
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Button title="Normal" onPress={padrao}></Button>
          </View>
          <View style={{ marginTop: 20 }} />
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Button title="Direita" onPress={padrao4}></Button>
          </View>
          <View style={{ marginTop: 20 }} />
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Button title="Esquerda" onPress={padrao3}></Button>
            <View style={{ marginTop: 20 }} />
          </View>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Button title="Baixo" onPress={padrao1}></Button>
            <View style={{ marginTop: 20 }} />
          </View>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Button title="padraoForcado" onPress={padrao2}></Button>
            <View style={{ marginTop: 20 }} />
          </View>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
