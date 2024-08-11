import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        
        key: "609199107ea6448c91af13af4960a5e0"
    }
})