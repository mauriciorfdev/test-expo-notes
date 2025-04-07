import { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const NoteItem = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);
  const inputRef = useRef(null);
  const originalText = useRef(note.text);

  const handleSave = () => {
    if (editedText.trim() === '') return;
    if (editedText !== originalText.current) {
      onEdit(note.$id, editedText);
      originalText.current = editedText;
    }
    setIsEditing(false);
  };

  return (
    <View style={styles.noteItem}>
      <View style={styles.itemText}>
        {isEditing ? (
          <TextInput
            ref={inputRef}
            style={styles.input}
            value={editedText}
            onChangeText={setEditedText}
            autoFocus
            onSubmitEditing={handleSave}
            returnKeyType='done'
          />
        ) : (
          <Text style={styles.noteText}> {note.text} </Text>
        )}
      </View>

      <View style={styles.actions}>
        {isEditing ? (
          <TouchableOpacity
            onPress={() => {
              handleSave();
              inputRef.current?.blur();
            }}
          >
            <Text style={styles.update}>💾</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Text style={styles.update}>✏️</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => onDelete(note.$id)}>
          <Text style={styles.delete}>❌</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
  delete: {
    fontSize: 18,
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 18,
  },
  update: {
    fontSize: 18,
    color: 'blue',
    marginRight: 10,
  },
  itemText: {
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
  },
});

export default NoteItem;
