import { ListItem } from "@react-native-material/core"
import React,{useState, useEffect} from "react"
import { connect } from "react-redux"
import * as actions from "../actions/ingredients"


const IngredientList = (props) => {

    const onDelete = id => {
        if(window.confirm("Are you sure you want to delete this ingredient?")){
            props.deleteIngredient(id, () => {
                console.log("Ingredient deleted!!");
            })
        }
    }

    useEffect(() => {
        props.fetchAllIngredients()
    },[])

    return <>
        {
            props.ingredientsList.map( (record, index) => {
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
}

const mapStateToProps = state => ({
    ingredientsList: state.ingredients.list

})


const mapActionsToProps = {
    fetchAllIngredients: actions.fetchAll,
    deleteIngredient: actions.remove,
}

export default connect(mapStateToProps, mapActionsToProps)(IngredientList)