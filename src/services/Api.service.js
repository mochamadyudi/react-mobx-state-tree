import Utils from "../utils";
import AxiosInstance from "../utils/axios-instance";

export default class ApiService {
  constructor(props = {}) {
    this.url = props?.url ?? "/"
    this.body = props?.body ?? ""
    this.responseType = props?.responseType ??null
    this.config = {
      ...props?.config,
      params:props?.config?.params ?? {},
      headers:  {
        ...props?.config?.headers,
        'Authorization': props?.config?.headers?.Authorization ?? `Bearer ${Utils.getToken('get')}`
      }
    }
  }
  async get(){
    try{
      if(this.responseType){
        Reflect.set(this.config,'responseType',this.responseType)
      }
      return await AxiosInstance.get(this.url,{
        ...this.config
      })
        .then((response)=> {
          let data = response?.data
          let fields = data ?? {}
          if(typeof(data?.pagination) !== "undefined"){
            Reflect.set(fields,"pagination", data?.pagination)
          }
          if(typeof(data?.query) !== "undefined"){
            Reflect.set(fields,"params", data?.query)
          }
          if(typeof(data?.params) !== "undefined"){
            Reflect.set(fields,"params", data?.params)
          }

          if(typeof(data?.data) !== "undefined"){
            Reflect.set(fields,"data", data?.data)
          }
          if(typeof(data?.error) !== "undefined"){
            Reflect.set(fields,"error",data?.error)
          }
          if(typeof(data?.message) !== "undefined"){
            Reflect.set(fields,"message",data?.message)
          }
          return fields
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
  async patch(){
    try{
      return await AxiosInstance.patch(this.url,this.body, {
        ...this.config
      })
        .then((response)=> {
          let data = response?.data
          let fields = {}
          if(typeof(data?.pagination) !== "undefined"){
            Reflect.set(fields,"pagination", data?.pagination)
          }
          if(typeof(data?.query) !== "undefined"){
            Reflect.set(fields,"params", data?.query)
          }
          if(typeof(data?.params) !== "undefined"){
            Reflect.set(fields,"params", data?.params)
          }

          if(typeof(data?.data) !== "undefined"){
            Reflect.set(fields,"data", data?.data)
          }
          if(typeof(data?.error) !== "undefined"){
            Reflect.set(fields,"error",data?.error)
          }
          if(typeof(data?.message) !== "undefined"){
            Reflect.set(fields,"message",data?.message)
          }
          return fields
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
  async post(){
    try{
      return await AxiosInstance.post(this.url,this.body,{
        ...this.config
      })
        .then((response)=> {
          let data = response?.data
          let fields = {}
          if(typeof(data?.pagination) !== "undefined"){
            Reflect.set(fields,"pagination", data?.pagination)
          }
          if(typeof(data?.query) !== "undefined"){
            Reflect.set(fields,"params", data?.query)
          }
          if(typeof(data?.params) !== "undefined"){
            Reflect.set(fields,"params", data?.params)
          }

          if(typeof(data?.data) !== "undefined"){
            Reflect.set(fields,"data", data?.data)
          }
          if(typeof(data?.error) !== "undefined"){
            Reflect.set(fields,"error",data?.error)
          }
          if(typeof(data?.message) !== "undefined"){
            Reflect.set(fields,"message",data?.message)
          }
          return fields
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
  async put(){
    try{
      return await AxiosInstance.put(this.url,this.body,{
        ...this.config
      })
        .then((response)=> {
          let data = response?.data
          let fields = {}
          if(typeof(data?.pagination) !== "undefined"){
            Reflect.set(fields,"pagination", data?.pagination)
          }
          if(typeof(data?.query) !== "undefined"){
            Reflect.set(fields,"params", data?.query)
          }
          if(typeof(data?.params) !== "undefined"){
            Reflect.set(fields,"params", data?.params)
          }

          if(typeof(data?.data) !== "undefined"){
            Reflect.set(fields,"data", data?.data)
          }
          if(typeof(data?.error) !== "undefined"){
            Reflect.set(fields,"error",data?.error)
          }
          if(typeof(data?.message) !== "undefined"){
            Reflect.set(fields,"message",data?.message)
          }
          return fields
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
  async delete(){
    try{
      return await AxiosInstance.delete(this.url, {
        ...this.config
      })
        .then((response)=> {
          let data = response?.data
          let fields = {}
          if(typeof(data?.pagination) !== "undefined"){
            Reflect.set(fields,"pagination", data?.pagination)
          }
          if(typeof(data?.query) !== "undefined"){
            Reflect.set(fields,"params", data?.query)
          }
          if(typeof(data?.params) !== "undefined"){
            Reflect.set(fields,"params", data?.params)
          }

          if(typeof(data?.data) !== "undefined"){
            Reflect.set(fields,"data", data?.data)
          }
          if(typeof(data?.error) !== "undefined"){
            Reflect.set(fields,"error",data?.error)
          }
          if(typeof(data?.message) !== "undefined"){
            Reflect.set(fields,"message",data?.message)
          }
          return fields
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
