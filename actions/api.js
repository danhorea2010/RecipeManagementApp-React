const axios = require('axios').default;
//TODO: add api url
const baseUrl = "https://recipe-manger-api-staging.onrender.com/api/v1/";

export default {
    ingredient(url=baseUrl+"ingredients/") {
        return {
            fetchAll: () => axios.get(url),
            fetchById : id => axios.get(url+id),
            create : newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url+id, updatedRecord),
            delete: id => axios.delete(url+id)
        }
    },
    recipe(url=baseUrl+"recipes/") {
        return {
            fetchAll: () => axios.get(url),
            fetchById : id => axios.get(url+id),
            create : newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url+id, updatedRecord),
            delete: id => axios.delete(url+id)
        }
    }
}