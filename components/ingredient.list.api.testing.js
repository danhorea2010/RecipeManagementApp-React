import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { IngredientsListRender } from '../rendering/ingredient.list.render';
import { useTestData } from './useTestData';

// For local testing only
const IngredientsAPITesting = props => {
  const [ingredients, setIngredients] = useState([]);

  // Use the required query from the text data
  const extractionFunction = (json) => {
      const testIngredientsMap = json.hits.flatMap(hit => hit.recipe.ingredients);
      setIngredients(testIngredientsMap);
  }

  const {json} = useTestData(extractionFunction);

  return (
    <SafeAreaView
      style={styles.listContainer}>
      
      <IngredientsListRender ingredients={ingredients}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer : {
    flex:1, 
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    padding: 15,
  },
});

export default IngredientsAPITesting;
