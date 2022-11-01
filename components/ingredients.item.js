import {View, Text, Pressable} from 'react-native';
import {ListItem} from '@react-native-material/core';

export const IngredientItem = props => {

  return (
    <View>
      <ListItem key={props.index} title={props.name} />
    </View>
  );
};