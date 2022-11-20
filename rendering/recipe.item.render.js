import { View, Text,StyleSheet, Image } from "react-native";


export const renderRecipe = ({item}) => {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>{item.label}</Text>
          <Text>Calories: {Math.round(item.calories)} kcal</Text>
          <Text>PROTEIN 💪: {Math.round(item.totalNutrients.PROCNT.quantity)} g</Text>
          <Text>Dish Type: {item.dishType}</Text>
          <Text>Ingredients: {item.ingredients.map(ingredient => <View
          key={ingredient.foodId}>
            <Text>{ingredient.text.trim() +'\n'}</Text>
          </View>)}</Text>
          <Image
            style={{width: 200, height: 200}}
            source={{uri: item.images.SMALL.url}}></Image>
        </View>
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
  image: {
    width: '100%',
    height: '70%',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});



