import React from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';

interface ContentType {
  item: {
    title: string;
    content: string;
    date: string;
    author: string;
  };
  visible: boolean;
  onClose: () => void;
}

interface contentType {
  title: string;
  content: string;
  date: string;
  author: string;
  nameCharacter: string;
  color: string;
  onClose: () => void;
}

const AvatarText = ({
  nameCharacter,
  color,
}: {
  nameCharacter: string;
  color: string;
}) => (
  <Avatar.Text
    size={40}
    label={nameCharacter}
    style={{
      backgroundColor: color,
    }}
  />
);

const CardDetail = ({
  content,
  nameCharacter,
  author,
  date,
  color,
  onClose,
}: contentType) => (
  <>
    <Card style={styles.item}>
      <Card.Title
        title={author}
        subtitle={date}
        left={() => <AvatarText nameCharacter={nameCharacter} color={color} />}
        right={() => <Button onPress={onClose}>Regresar</Button>}
      />
      <Card.Content>
        <Text variant="bodyMedium">{content}</Text>
      </Card.Content>
    </Card>
  </>
);

const DetailModal = ({item, visible, onClose}: ContentType) => {
  return (
    <Modal
      style={{
        width: '100%',
      }}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
      transparent={false}>
      <View style={styles.centeredView}>
        <CardDetail
          author={item?.author}
          date={item?.date}
          content={item?.content}
          title={item?.title}
          nameCharacter={item?.author.substring(0, 1)}
          onClose={() => onClose()}
          color="red"
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  modalView: {
    height: 300,
    width: '100%',
  },
  item: {
    paddingHorizontal: 10,
    width: '100%',
    flexDirection: 'row',
  },
});

export default DetailModal;
