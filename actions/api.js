import { Platform } from 'react-native';

const axios = require('axios').default;
//TODO: add api url
//const baseUrl = "https://recipe-manger-api-staging.onrender.com/api/v1/";
const baseUrl = Platform.OS === 'ios' ? 'http://localhost:3000/api/v1/' : 'http://10.0.2.2:3000/api/v1/'

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