import {createStore, compose, applyMiddleware} from "redux"
import thunk from "thunk"

import {reducers} from "../reducers"

export const store = createStore (
    reducers,
    compose(
        applyMiddleware(thunk)
    )
)