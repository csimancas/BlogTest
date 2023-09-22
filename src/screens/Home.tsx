import React from 'react';
import {View, StyleSheet} from 'react-native';
import EntryList from '../components/EntryList';

const Home = () => {
  return (
    <View style={styles.container}>
      <EntryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
});

export default Home;
