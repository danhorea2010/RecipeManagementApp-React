import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import * as actions from "../actions/recipe"
import { useForm } from './useForm'
import { Stack, TextInput, IconButton,Button } from "@react-native-material/core";

const initialFieldValues = {
    ingredients : [],
    calories : 0,
}

const RecipeForm = (props) => {

    // TODO: function to validate recipe entry form
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        // ...
        // ...

        setErrors({
            ...temp
        })

        if (fieldValues == values) {
            return Object.values(temp).every(x => x=="")
        }
    }

    const { 
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
      }
        = useForm(initialFieldValues, validate, props.setCurrentId);
    
    useEffect(() => {
        if (props.currentId != 0 ){
            setValues({
                ...props.recipeList.find(x => x.id == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    const handleSubmit = event => {
        event.preventDefault()

        if(validate()) {
            const onSuccess = () => {
                resetForm()
            }

            if (props.currentId == 0) 
                props.createRecipe(values, onSuccess)
            
            else {
                props.updateRecipe(props.currentId, values, onSuccess)
            }
        }
    }

    return (
        <form autoComplete='off' noValidate onSubmit={handleSubmit}>
            <Stack>
                <TextInput 
                    value={values.calories}
                    onChange={handleInputChange}
                    {...(errors.calories && {error: true, helperText: errors.calories})}
                />
                
            </Stack>
            <Button variant='contained' color="primary" type="submit">Submit</Button>
            <Button variant="contained" color="secondary" onClick={() => resetForm()}>Reset</Button>
        </form>
    )

}

const mapStateToProps = state => ({
    recipeList: state.recipe.list
})

const mapActionsToProps = {
    createRecipe: actions.create,
    updateRecipe: actions.update,
    deleteRecipe: actions.remove
}

export default connect(mapStateToProps, mapActionsToProps)(RecipeForm)