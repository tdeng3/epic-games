import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
         key: 'a3d547a1cf264c4b93464297a2862700'
    }
})