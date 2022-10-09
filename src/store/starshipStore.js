import {observable, action} from 'mobx'
import ApiService from '../services/Api.service'
import Swal from 'sweetalert2'
import Utils from "../utils";


class StarshipStore {
    @observable loading = true;
    @observable detail = {}
    @observable result = observable.map();
    @observable pagination = {total_page:0,page:1,next_page:1,prev_page:1,limit:10}
    @observable count = 0;
    @observable next = null;
    @observable previous = null;

    _delete(data){
        return this.result = data
    }

    _pushed(){

    }

    _created(){

    }

    _get(){
        return this.detail.toJSON()
    }

    _list(){
        return this.result.toJSON()
    }


    @action
    async update(item){
        let data = this.result.toJSON()

        if(Array.isArray(data) && data.length >0){
            let index = data.findIndex((item)=> item._id === item._id)
            if(index >= 0){
                data[index]._loading = true
                Swal.fire({
                    title: 'Success!',
                    text: `${data[index].name} is updated`,
                    icon: 'success',
                    confirmButtonText: 'back'
                })

                data[index] = {
                    ...data[index],
                    ...item,
                    _loading:false
                }
            }
        }
        this.result = data

    }

    @action
    async getDetail(id){
        this.loading = true
        this.detail = {}

        return await new ApiService({
            url:`/starships/${id}`
        }).get()
            .then(action((response)=> {
                Reflect.set(response.data,'id',Utils.getIdInRouteSwapi(response.data.url))
                this.detail = response.data
                this.loading = false
            }))
            .catch((err)=> {
                this.loading = false
            })
    }


    @action
    delete(id){
        let data = this.result.toJSON()

        if(Array.isArray(data) && data.length >0){
            let index = data.findIndex((item)=> item._id === id)
            if(index >= 0){
                data[index]._loading = true
                Swal.fire({
                    title: 'Success!',
                    text: `${data[index].name} is Deleted`,
                    icon: 'success',
                    confirmButtonText: 'back'
                })
            }
        }
        this.result = data

        setTimeout(()=> {
            this._delete(data.filter((item)=> item._id !== id))
        },200)
    }

    @action
    async getList(params = {}){
        this.loading = true
        this.result = []
        return await new ApiService({
            url:"/starships",
            config:{
                params
            }
        }).get()
            .then(action((response) => {
                let data = response.data
                if (typeof (data.results) !== "undefined" && Array.isArray(data.results) && data.results.length > 0) {
                    let newArr = []
                    for(let i = 0; i < data.results.length;i++){
                        newArr.push({
                            ...data.results[i],
                            _id: (Math.random() * data.results.length),
                            id:Utils.getIdInRouteSwapi(data.results[i].url),
                            _loading:false
                        })
                    }
                    this.result = newArr

                }
                this.count = typeof(data.count) !== "undefined" ? data.count : 0
                let total_page = 1;
                if(this.count > 0){
                    total_page = Math.ceil(this.count/this.pagination.limit)
                    this.pagination.total_page = total_page
                }

                this.pagination.page = typeof(params.page) !== "undefined" ? params.page : this.pagination.page
                this.pagination.next_page = this.pagination.page < total_page ? this.pagination.page + 1 : this.pagination.page
                this.pagination.prev_page = this.pagination.page > 0 ? this.pagination.page - 1 : this.pagination.page

            }))
            .catch((err) => {
                console.log('CATCH')
                this.loading = false
                console.log({err})
            })
            .finally(action(() => {
                this.loading = false;
            }));
    }
}

export default new StarshipStore()