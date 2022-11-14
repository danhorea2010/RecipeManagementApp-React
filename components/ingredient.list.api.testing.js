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

// For local testing only
const IngredientsAPITesting = props => {
  const [data, setData] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

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
        const testIngredientsMap = json.hits.flatMap(hit => hit.recipe.ingredients);
        setIngredients(testIngredientsMap);
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
          <Text style={styles.text}>{item.text}</Text>
          <Image
            style={{width: 200, height: 200}}
            source={{uri: item.image}}></Image>
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
        {ingredients.length > 0 ? (
          /*ingredients.map(item =>
            <View style={styles.container}>
            <Text style={styles.text} >{item.text}</Text>
            <Image style={{width:200, height:200}} source={{uri:item.image }}></Image>
            </View>
          )} */
          <View>
            <FlatList 
            data={ingredients} 
            renderItem={renderItem}
            
            ></FlatList>
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

export default IngredientsAPITesting;
