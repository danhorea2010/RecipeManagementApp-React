
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import { RecipesListRender } from '../rendering/recipe.list.render';
import {useTestData} from './useTestData';

// For local testing only
// Logic for extracting ingredients, recipes and so on from the api should be in a separate file
// Components should just use a hook to get and use the data
// 
const RecipesAPITesting = props => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const extractionFunction = json => {
    let recipesMap = json.hits.flatMap(hit => hit.recipe);
    const newRecipesMap = recipesMap.sort((a, b) =>
      a.totalNutrients.PROCNT.quantity < b.totalNutrients.PROCNT.quantity
        ? 1
        : -1,
    );
    setRecipes(newRecipesMap);
  };

  const {json} = useTestData(extractionFunction);

  return (
    <SafeAreaView
      style={styles.listContainer}>
      <RecipesListRender recipes={recipes}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex:1, 
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    padding: 15,
  },
});

export default RecipesAPITesting;
