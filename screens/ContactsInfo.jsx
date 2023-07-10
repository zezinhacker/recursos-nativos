import React, { useState, useCallback } from "react";
import {Button,FlatList,StyleSheet,Text,TextInput,View,TouchableOpacity,Alert,} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import * as Contacts from "expo-contacts";
import { Notifications } from "expo";
import Header from "../components/Header";
import Items from "../components/Item";

export default function ContactsInfo({ navigation }) {
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const loadContacts = useCallback(async () => {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
    });

    const filteredContacts = data.filter((contact) =>
      contact.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setContacts(filteredContacts);
  }, [searchText]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          loadContacts();
        }
      })();
    }, [loadContacts])
  );

  const handleContactPress = (contact) => {
    const { name, phoneNumbers } = contact;
    const phoneNumber = phoneNumbers[0]?.number;

    if (!phoneNumber) {
      Alert.alert("nenhum numero valido");
      return;
    }

    const notificationTitle = "informação do contato";
    const notificationSubtitle = name;
    const notificationBody = `numero de telefone: ${phoneNumber}`;

    sendNotification(notificationTitle, notificationSubtitle, notificationBody);
  };

  const sendNotification = async (title, subtitle, body) => {
    try {
      const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title,
          subtitle,
          body,
        },
        trigger: { seconds: 3 },
      });
      console.log("Notificação foi um sucesso:", notificationId);
    } catch (error) {
      console.log("erro na notificação:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Notificações" />
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar pelo nome"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        style={{ flex: 1, gap: 10 }}
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleContactPress(item)}>
            <Items item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#FFF",
  },
  searchInput: {
    margin: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
});
