import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const useTestData = (extractionFunction) => {

    const [response, setResponse] = useState({});

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
        setResponse(json)
        extractionFunction(json)
        //const testIngredientsMap = json.hits.flatMap(hit => hit.recipe.ingredients);
        //setIngredients(testIngredientsMap);
      })
      .catch(err => {
        console.log(err);
      });

    
  };

  useEffect(() => {
    getData()
  }, [])

  return {response}


}