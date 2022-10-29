import React, { useState, useEffect } from 'react'
import { Button, ListItem } from "@react-native-material/core"
import * as actions from "../actions/recipe"
import { connect } from 'react-redux'

const RecipeList = (props) => {

    // TODO: test
    const onDelete = id => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            props.deleteRecipe(id, () => {
                console.log("recipe deleted!!");
            })
        }
    }

    // Fetch recipes at startup
    useEffect(() => {
        props.fetchAllRecipes()
    }, [])

    return (
        <>
            {
                props.recipeList.map((record, index) => {
                    return (
                        <>
                            <ListItem title={record.name} />
                            <ListItem title={record.calories} />
                            <ListItem title={record.type} />
                        </>
                    )
                })
            }
        </>
    )
}

const mapStateToProps = state => ({
    recipeList: state.recipe.list

})

const mapActionsToProps = {
    fetchAllRecipes: actions.fetchAll,
    deleteRecipe: actions.remove
}

export default connect(mapStateToProps, mapActionsToProps)(RecipeList)