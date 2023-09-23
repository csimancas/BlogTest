import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import useEntryList from '../hooks/useEntryList';
import DetailModal from './DetailModal';
import EntryForm from './EntryForm';
import FloatingButton from './FloatingButton';
import SearchBar from './SearchBar';

interface contentType {
  title: string;
  content: string;
  date: string;
  author: string;
  nameCharacter: string;
  color: string;
  action: () => void;
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

const Item = ({
  content,
  title,
  nameCharacter,
  author,
  date,
  color,
  action,
}: contentType) => (
  <View style={styles.item}>
    <Card>
      <Card.Title
        title={author}
        subtitle={new Date(date).toLocaleDateString()}
        left={() => <AvatarText nameCharacter={nameCharacter} color={color} />}
      />
      <Card.Content>
        <Text variant="bodyMedium" style={styles.title}>
          {title}
        </Text>
        <Text variant="bodyMedium">{content}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={action}>Ver Detalle</Button>
      </Card.Actions>
    </Card>
  </View>
);

const EntryList = () => {
  const {
    data,
    searchText,
    searchItem,
    filteredData,
    selectedEntry,
    setSelectedEntry,
  } = useEntryList();

  const [visible, setVisible] = useState(false);
  const [visibleEntry, setVisibleEntry] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        searchQuery={searchText}
        onChangeSearch={text => searchItem(text)}
      />
      <DetailModal
        visible={visible}
        item={selectedEntry}
        onClose={() => setVisible(false)}
      />
      <EntryForm
        visible={visibleEntry}
        onClose={() => setVisibleEntry(false)}
      />
      <FlatList
        data={searchText.length > 0 ? filteredData : data}
        renderItem={({item}) => (
          <Item
            color={'pink'}
            action={() => {
              setVisible(true);
              setSelectedEntry(item);
            }}
            nameCharacter={item.author.substring(0, 1)}
            author={item.author}
            title={item.title}
            date={item.date}
            content={item.content.substring(0, 70)}
          />
        )}
        keyExtractor={item => item._id}
      />
      <FloatingButton action={() => setVisibleEntry(true)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default EntryList;
