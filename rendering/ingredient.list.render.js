import {View, FlatList,StyleSheet, Text } from 'react-native';
import { renderIngredient } from './ingredient.item.render';

import React from 'react';

export const IngredientsListRender = props => {
  return (
    <View>
      {props.ingredients.length > 0 ? (
        
        <View>
          <FlatList data={props.ingredients} renderItem={renderIngredient}></FlatList>
        </View>
      ) : (
        <View style={styles.container}>
          <Text>Can't render yet chief</Text>
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 200,
      marginBottom: 25,
      borderRadius: 15,
      backgroundColor: '#FFFFFF',
      overflow: 'hidden',
    },
});
