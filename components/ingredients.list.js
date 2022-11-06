import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/ingredients';
import {SafeAreaView, View} from 'react-native';
import { IngredientItem } from './ingredients.item';
import { StyleSheet } from 'react-native';

const IngredientList = props => {
  const onDelete = id => {
    props.deleteIngredient(id, () => {
      console.log('Ingredient deleted!!');
    });
  };


  useEffect(() => {
    props.fetchAllIngredients();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {props.ingredientsList.map((record, index) => {
        return (
          <IngredientItem key={index} index={index} name={record.name} macros={record.macros} type={record.type}/>
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    }
})

const mapStateToProps = state => ({
  ingredientsList: state.ingredients.list,
});

const mapActionsToProps = {
  fetchAllIngredients: actions.fetchAll,
  deleteIngredient: actions.remove,
};

export default connect(mapStateToProps, mapActionsToProps)(IngredientList);