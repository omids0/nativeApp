import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import NoteInput from "./components/NoteInput";
import NoteItem from "./components/NoteItem";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function addNoteHandler(enteredNote) {
    setNotes([
      ...notes,
      { note: enteredNote, id: Math.random().toString(16).slice(2) },
    ]);
    setShowModal(false);
  }

  function removeHandler(id) {
    const notesFilter = notes.filter((note) => note.id !== id);
    setNotes(notesFilter);
  }

  function modalHandler() {
    setShowModal(!showModal);
  }

  console.log(notes);

  return (
    <View style={styles.container}>
      <Button title="+ add note" color="blue" onPress={modalHandler} />
      <NoteInput onAddNote={addNoteHandler} visible={showModal} />
      <View style={styles.listNotes}>
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <NoteItem itemData={itemData} removeItem={removeHandler} />
          )}
          alwaysBounceVertical={false}
        />
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
  listNotes: {
    marginVertical: "1rem",
  },
});
