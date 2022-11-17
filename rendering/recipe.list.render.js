import React from 'react';
import {View, FlatList,StyleSheet, Text } from 'react-native';
import { renderRecipe } from './recipe.item.render';

export const RecipesListRender = props => {
  return (
    <View>
      {props.recipes.length > 0 ? (
        <View>
          <FlatList data={props.recipes} renderItem={renderRecipe}></FlatList>
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
