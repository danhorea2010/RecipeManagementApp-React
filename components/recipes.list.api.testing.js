import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

// For local testing only
// Logic for extracting ingredients, recipes and so on from the api should be in a separate file
// Components should just use a hook to get and use the data
// 
const RecipesAPITesting = props => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const getData = () => {
    fetch(
      // TODO Path to cached json response
      '/Users/dan/Desktop/recipeManagement/RecipeManagementApp_React/edamam_request_example_1.json',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        let recipesMap = json.hits.flatMap(hit => hit.recipe);
        const newRecipesMap = recipesMap.sort((a, b) =>
          a.totalNutrients.PROCNT.quantity < b.totalNutrients.PROCNT.quantity
            ? 1
            : -1,
        );

        console.log(json);
        let ingredientsList = json.hits.flatMap(hit => hit.recipe.ingredients);

        setIngredients(ingredientsList);
        setRecipes(newRecipesMap);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>{item.label}</Text>
          <Text>Calories: {Math.round(item.calories)} kcal</Text>
          <Text>
            PROTEIN 💪: {Math.round(item.totalNutrients.PROCNT.quantity)} g
          </Text>
          <Text>Dish Type: {item.dishType}</Text>
          <Text>
            Ingredients:{' '}
            {item.ingredients.map(ingredient => (
              <View key={ingredient.foodId}>
                <Text>{ingredient.text.trim() + '\n'}</Text>
              </View>
            ))}
          </Text>
          <Image
            style={{width: 200, height: 200}}
            source={{uri: item.images.SMALL.url}}></Image>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        padding: 15,
      }}>
      <View>
        {recipes.length > 0 ? (
          <View>
            <FlatList data={recipes} renderItem={renderItem}></FlatList>
          </View>
        ) : (
          <View style={styles.container}>
            <Text>Can't render yet chief</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
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
  image: {
    width: '100%',
    height: '70%',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default RecipesAPITesting;
