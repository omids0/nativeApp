import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export default function NoteInput(props) {
  const [title, setTitle] = useState("");

  function inputHandler(event) {
    setTitle(event);
  }

  function addGoalHandler() {
    props.onAddNote(title);
    setTitle("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View>
        <TextInput
          placeholder="Take your note here..."
          style={styles.inputNote}
          onChangeText={inputHandler}
          value={title}
        />
        <Button title="Save Note" color="orange" onPress={addGoalHandler} />
      </View>
    </Modal>
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
  inputNote: {
    padding: "8px",
    backgroundColor: "#cfcfcf",
    marginBottom: "1rem",
  },
});
