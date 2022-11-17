import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

const renderIngredient = ({item}) => {
  return (
    <View>
      <View>
        <Text>{item.text}</Text>
        <Button title="Delete" />
      </View>
    </View>
  );
};

const UserPantry = props => {
  const [ingredients, setIngredients] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);


  const [user, setUser] = useState({});

  const getIngredients = () => {
    return [
      {
        text: '1/2 cup bbq sauce',
        quantity: 0.5,
        foodId: 'food_avt8j2wabi4myjaafpo4makv3lqn',
      },
      {
        text: '2 tablespoons chili powder',
        quantity: 2.0,
        foodId: 'food_aii2sclb4r123rbfr2ybjasrl3nc',
      },
    ];
  };

  const getShoppingList = () => {};

  const onIngredientNameTextChanged = e => {
    console.log('IngredientName: ' + e);
  };

  const onQuantityTextChanged = e => {
    console.log('Quantity: ' + e);
  };

  const onMeasurementTextChanged = e => {
    console.log("Measurement: " + e);

  }



  useEffect(() => {
    const fetchedIngredients = getIngredients();
    setIngredients(fetchedIngredients);
    console.log(fetchedIngredients);
  }, []);

  return (
    <SafeAreaView style={{flex:1}}>
      <Text>Test</Text>
      {ingredients.length > 0 ? (
        <View style={styles.liststyle}>
          <FlatList data={ingredients} renderItem={renderIngredient} />
        </View>
      ) : null}


      <View style={styles.inputContainer}>
        <Text>Ingredient Name</Text>
        <TextInput
          style={styles.input}
          title={'test'}
          onChangeText={onIngredientNameTextChanged}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Quantity</Text>
        <TextInput
          style={styles.input}
          title={'test'}
          onChangeText={onQuantityTextChanged}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Measurement</Text>
        <TextInput
          style={styles.input}
          title={'test'}
          onChangeText={onMeasurementTextChanged}
        />
      </View>

        <Button title="Add"/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
  },
  liststyle: {
    width: "100%",
    borderRadius:2,
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  buttonText1: {
    width: '40%',
    height: 30,
  },
  buttonText2: {
    width: '40%',
    height: 30,
  },
  input: {
    width: '100%',
    color: '#555555',
    paddingRight: 10,
    height: 20,
    borderColor: '#6E5BAA',
    borderWidth: 1,
    borderRadius: 2,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    borderBottomColor: '#9E7CE3',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    width: '100%',
    height: '10%',
  },
});

export default UserPantry;
