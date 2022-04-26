import {Text} from 'react-native';
import * as React from 'react';
import {Pressable} from 'react-native';

function AllExpenses({navigation}) {
  return (
    <Pressable onPress={navigation.navigate('Recent')}>
      <Text>Hello</Text>
    </Pressable>
  );
}

export default AllExpenses;
