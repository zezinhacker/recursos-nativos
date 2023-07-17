import { View, StyleSheet, Text, Button } from "react-native";
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

function sim() {
    alert("Você aceitou namorar comigo! :)");
    // redireciona para um URL após clicar no SIM
    location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
}

function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

/* Apague se quiser, isso apenas escreve MTHS1901 e o link para o tutorial no console */
const o = "MTHS1901", e = 90, l = "bold"; console.log(`%c${o}`, "font-size: 90px; font-weight: bold; background: linear-gradient(90deg, red, yellow);"), console.log("Tutorial: https://www.youtube.com/watch?v=zxxB9SFh9p4");


  return (
    <View style={styles.container}>
      <Header title="Notificações" />
      <View>
        <Button class="btn" onclick="desvia(this)" onmouseover="desvia(this)" style="position: absolute;">NÃO</Button>
      </View>
    </View>
  );
}
