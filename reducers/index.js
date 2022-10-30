import {combineReducers} from "redux"
import { recipe } from "./recipe"
import {ingredients} from "./ingredients"

export const reducers = combineReducers({
    ingredients,
    recipe,

})