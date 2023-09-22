import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import useEntryList from '../hooks/useEntryList';
import SearchBar from './SearchBar';
import FloatingButton from './FloatingButton';
import DetailModal from './detailModal';

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
  nameCharacter,
  author,
  date,
  color,
  action,
}: contentType) => (
  <>
    <Card style={styles.item}>
      <Card.Title
        title={author}
        subtitle={date}
        left={() => <AvatarText nameCharacter={nameCharacter} color={color} />}
      />
      <Card.Content>
        <Text variant="bodyMedium">{content}</Text>
      </Card.Content>

      <Card.Actions>
        <Button onPress={action}>Ver Detalle</Button>
      </Card.Actions>
    </Card>
  </>
);

const EntryList = () => {
  const {
    entries,
    searchText,
    searchItem,
    filteredData,
    selectedEntry,
    setSelectedEntry,
  } = useEntryList();
  const [visible, setVisible] = useState(false);
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
      <FlatList
        data={searchText.length > 0 ? filteredData : entries}
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
        keyExtractor={item => item.id.toString()}
      />
      <FloatingButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
  },
});

export default EntryList;
