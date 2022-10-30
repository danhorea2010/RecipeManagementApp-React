import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions/ingredients"

import {useForm} from "./useForm"

const initialFieldValues = {
    name: "",
    calories: 0,
    macros: [],
    type: "",
    average_price: 0,
}

const IngredientsForm = (props) => {

    // TODO: function to validate ingredients entry form
    const validate = (fieldValues = values) => {
        let temp = {...errors}
        // ...
        // ...

        setErrors({
            ...temp
        })

        if(fieldValues == values) {
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
        if(props.currentId != 0) {
            setValues({
                ...props.ingredientsList.find(x => x.id == props.currentId)
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

            if(props.currentId == 0) {
                props.createIngredient(values, onSuccess)
            }
            else {
                props.updateIngredient(props.currentId, values, onSuccess)
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
    ingredientsList:  state.ingredients.list
})

const mapActionsToProps = {
    createIngredient: actions.create,
    updateIngredient: actions.update,
    deleteIngredient: actions.remove,

}

export default connect(mapStateToProps, mapActionsToProps)(IngredientsForm)