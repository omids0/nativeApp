import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  function inputHandler(event) {
    setTitle(event.target.value);
  }

  function submitHandler() {
    setNotes([
      ...notes,
      { note: title, id: Math.random().toString(16).slice(2) },
    ]);
    // setTitle("");
  }

  function removeHandler(id) {
    const notesFilter = notes.filter((note) => note.id !== id);
    console.log("notesFilter");
  }

  console.log(notes);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Take your note here..."
        style={styles.inputNote}
        onChange={inputHandler}
        value={title}
      />
      <Button title="Add Note" color="orange" onPress={submitHandler} />
      <View style={styles.listNotes}>
        <ScrollView>
          {notes?.map((note) => (
            <View
              key={Math.random().toString(16).slice(2)}
              style={styles.eachNote}
            >
              <Text style={styles.textNote} onPress={removeHandler(note.id)}>
                {note.note}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "1rem",
  },
  inputNote: {
    padding: "8px",
    backgroundColor: "#cfcfcf",
    marginBottom: "1rem",
  },
  listNotes: {
    marginVertical: "1rem",
  },
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
