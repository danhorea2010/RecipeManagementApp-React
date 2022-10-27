import axios from "axios";

//TODO: add api url
const baseUrl = "TODO/api/";

export default {
    ingredient(url=baseUrl+"ingredient/") {
        return {
            fetchAll: () => axios.get(url),
            fetchById : id => axios.get(url+id),
            create : newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url+id, updatedRecord),
            delete: id => axios.delete(url+id)
        }
    },
    recipe(url=baseUrl+"recipe/") {
        return {
            fetchAll: () => axios.get(url),
            fetchById : id => axios.get(url+id),
            create : newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url+id, updatedRecord),
            delete: id => axios.delete(url+id)
        }
    }
}