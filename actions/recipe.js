import api from "./api"

export const ACTION_TYPES = {
    CREATE: "CREATE",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
    FETCH_ALL: "FETCH_ALL",
}

const formatData = data => ({
    ...data,
    calories: parseInt(data.calories ? data.calories : 0),
    timesLiked: parseInt(data.timesLiked ? data.timesLiked : 0),
    timesShared: parseInt(data.timesShared ? data.timesShared : 0),
    
})

export const fetchAll = () => dispatch => {
    api.recipe().fetchAll()
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

export const create = (data, onSuccess ) => dispatch => {
    data = formatData(data)
    api.recipe().create(data)
    .then( res => {
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload: res.data
        })
        onSuccess()
    })
        .catch(err => console.log(err))
}

export const update = (id, data, onSuccess ) => dispatch => {
    data = formatData(data)
    api.recipe().update(id, data)
    .then( res => {
        dispatch({
            type: ACTION_TYPES.UPDATE,
            payload: {id, ...data}
        })
        onSuccess()
    })
        .catch(err => console.log(err))
}

export const remove = (id, onSuccess ) => dispatch => {
    api.recipe().delete(id)
    .then( res => {
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: id
        })
        onSuccess()
    })
        .catch(err => console.log(err))
}




