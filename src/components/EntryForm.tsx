import React from 'react';
import {Modal, View, StyleSheet, Text, Button} from 'react-native';

interface EntryFormProps {
  visible: boolean;
  onClose: () => void;
}

const EntryForm = ({visible, onClose}: EntryFormProps) => {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Text>Modal Formulario</Text>
      </View>
      <Button title="Cerrar" onPress={() => onClose()} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: 10,
  },
});

export default EntryForm;
