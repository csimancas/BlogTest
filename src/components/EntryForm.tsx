import React from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

import {Formik} from 'formik';

interface EntryFormProps {
  visible: boolean;
  onClose: () => void;
}

const EntryForm = ({visible, onClose}: EntryFormProps) => {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Text variant="displaySmall" style={styles.header}>
          Agrega una nueva entrada en el blog.
        </Text>
        <View>
          <Formik
            initialValues={{
              title: '',
              content: '',
              author: '',
              date: new Date().toLocaleString(),
            }}
            onSubmit={values => console.log(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View style={styles.inputsView}>
                <TextInput
                  style={styles.input}
                  label="Titulo"
                  value={values.title}
                  onChangeText={handleChange('title')}
                />
                <TextInput
                  label="Contenido"
                  style={styles.input}
                  multiline={true}
                  value={values.content}
                  onChangeText={handleChange('content')}
                />
                <TextInput
                  label="Autor"
                  style={styles.input}
                  value={values.author}
                  onChangeText={handleChange('author')}
                />
                <TextInput
                  style={styles.input}
                  label="Fecha"
                  value={new Date().toLocaleString()}
                  disabled={true}
                />

                <View style={styles.buttons}>
                  <Button
                    style={styles.styleButton}
                    mode="contained"
                    onPress={() => onClose()}>
                    Regresar
                  </Button>
                  <Button
                    style={styles.styleButton}
                    mode="contained"
                    onPress={() => console.log(values)}>
                    Agregar entrada
                  </Button>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  header: {
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  styleButton: {
    width: '48%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputsView: {
    marginVertical: 20,
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default EntryForm;
