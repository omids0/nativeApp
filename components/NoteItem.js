import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function NoteItem({ itemData, removeItem }) {
  function removeItemHandler() {
    removeItem(itemData.item.id);
  }

  return (
    <Pressable onPress={removeItemHandler}>
      <View style={styles.eachNote}>
        <Text style={styles.textNote}>{itemData.item.note}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  eachNote: {
    backgroundColor: "blue",
    borderRadius: "8px",
    padding: "1rem",
    marginVertical: ".5rem",
  },
  textNote: {
    color: "#fff",
  },
});
