import api from "./api"

export const ACTION_TYPES = {
    CREATE: "CREATE",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
    FETCH_ALL:"FETCH_ALL",
}

// used to format data if needed
const formatData = data => ({
    ...data
})

export const fetchAll = () => dispatch => {
    api.ingredient.fetchAll()
        .then(
            response => {
                dispatch({
                    type: ACTION_TYPES.FETCH_ALL,
                    payload: response.data
                })
            }
        )
        .catch(err => console.log(err))
        
}