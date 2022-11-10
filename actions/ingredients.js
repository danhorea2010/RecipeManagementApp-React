import api from "./api"

export const ACTION_TYPES = {
    CREATE: "CREATE",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
    FETCH_ALL: "FETCH_ALL",
    FETCH_BY_ID: "FETCH_BY_ID",
}

// used to format data if needed
const formatData = data => ({
    ...data,
    calories: parseInt(data.calories ? data.calories : 0),
    average_price: parseInt(data.average_price ? data.average_price : 0)
})

export const fetchAll = () => dispatch => {
    api.ingredient().fetchAll()
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

export const fetchById = (id) => dispatch => {
    api.ingredient().fetchById(id)
        .then(
            response => {
                dispatch({
                    type: ACTION_TYPES.FETCH_BY_ID,
                    payload: response.data
                })
                onSuccess()
            }
        )
        .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
    data = formatData()
    api.ingredient().create(data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    data = formatData(data)
    api.ingredient().update(id, data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: { id, ...data }
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const remove = (id, onSuccess) => dispatch => {
    api.ingredient().delete(id)
        .then( res => {
            dispatch({
                type: ACTION_TYPES.DELETE,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}