import React, {useState, useEffect} from "react";

//                      field values         validate function     current id of selected item in list
export const useForm = (initialFieldValues, validate,               setCurrentId) => {

    // hooks for current form values
    const [values, setValues] = useState(initialFieldValues)
    
    // hooks for current errors in form
    const [errors, setErrors] = useState({})

    // might need to be different for android...
    const handleInputChange = event => {
        const {name, value} = event.target
        const fieldValue = { [name]: value}

        setValues({
            ...values,
            ...fieldValue
        })
        validate(fieldValue)

    }

    const resetForm = () => {
        setValues({
            ...initialFieldValues
        })
        setErrors({})
        setCurrentId(0)
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}