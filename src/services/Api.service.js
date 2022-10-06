import Utils from "../utils";
import AxiosInstance from "../utils/axios-instance";

export default class ApiService {
    constructor(props = {}) {
        this.url = typeof(props.url) !== undefined ? props.url : "/"
        this.body = typeof(props.body) !== undefined ? props.body :  ""
        this.config = {
            params:{},
            headers:  {}
        }
        if(typeof(props.config) !== "undefined" && typeof(props.config) === "object"){
            Object.keys(props.config).forEach((key)=> {
                Reflect.set(this.config,key,props.config[key])
            })
        }

    }
    async get(){
        try{
            return await AxiosInstance.get(this.url,{
                ...this.config
            })
                .then((response)=> {
                    return {
                        ...response
                    }
                })
                .catch((err)=> {
                    return {
                        error:true,
                        message: err.message,
                        data: null
                    }
                })
        }catch(err){
            return {
                error:true,
                message: err.message,
                data: null
            }
        }
    }
}
