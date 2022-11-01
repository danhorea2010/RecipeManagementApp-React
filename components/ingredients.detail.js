import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/ingredients';
import {StyleSheet} from 'react-native';
import { useParams} from 'react-router-native';

const IngredientDetail = props => {
  useEffect(() => {
    props.fetchAllIngredients();
  }, []);

  const params = useParams();
  console.log(params);

  return (
    <View>
      {props.ingredientsList ? (
        <View style={styles.container}>
          <Text style={styles.header}>Name: {props.ingredientsList[params.index-1].name}</Text>
          <Text style={styles.header}>Type: {props.ingredientsList[params.index-1].type}</Text>
          <Text style={styles.header}>Average Price: {props.ingredientsList[params.index-1].average_price}</Text>
          <Text style={styles.header}>Calories: {props.ingredientsList[params.index-1].calories}</Text>
        </View>
      ) : null}
    </View>
  );
};

const mapStateToProps = state => ({
  ingredientsList: state.ingredients.list,
});

const mapActionsToProps = {
  fetchAllIngredients: actions.fetchAll,
  deleteIngredient: actions.remove,
};

const styles = StyleSheet.create({
  container: {},
  header: {
    marginTop:20,
    fontSize: 30,
  },
});

export default connect(mapStateToProps, mapActionsToProps)(IngredientDetail);
