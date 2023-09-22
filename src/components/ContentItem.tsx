import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const ContentItem = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
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

export default ContentItem;
