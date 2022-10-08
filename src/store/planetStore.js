import {observable, action} from 'mobx'
import ApiService from '../services/Api.service'

class PlanetStore {
    @observable loading = true;
    @observable result = observable.map();
    @observable pagination = {total_page:0,page:1,next_page:1,prev_page:1,limit:10}
    @observable count = 0;
    @observable next = null;
    @observable previous = null;

    /**
     * LISTS
     * @param params
     * @returns {Promise<*|{data: null, error: boolean, message: *}|{data: null, error: boolean, message: *}|undefined>}
     */
    async planetList(params = {}) {
        return new ApiService({url: "/planets", config: {params}}).get()
    }

    list(){
        return this.result.toJSON()
    }

    delete(data){
        return this.result = data
    }

    @action
    async deletePlanet(id){
        console.log({id})
        let data = this.result.toJSON()

        if(Array.isArray(data) && data.length >0){
            let index = data.findIndex((item)=> item._id === id)
            if(index >= 0){
                data[index]._loading = true
            }
        }
        this.result = data

        setTimeout(()=> {
            this.delete(data.filter((item)=> item._id !== id))
        },200)
        // action(()=> {
        //     setTimeout(()=> {
        //         this.result = data.filter((item)=> item._id !== id)
        //     },2000)
        //
        // })
        // this.result = data
        // this.result = data
        // console.log(this.result)
        // setTimeout(()=> {
        //     data= data.filter((item)=> item._id !== id)
        // },2000)
        // return this.result = data

    }

    @action
    async getPlanetList(params = {}) {
        this.loading = true;
        this.result = []
        return await this.planetList(params)
            .then(action((response) => {
                console.log({response}, 'THEN')

                let data = response.data
                if (typeof (data.results) !== "undefined" && Array.isArray(data.results) && data.results.length > 0) {
                    let newArr = []
                    for(let i = 0; i < data.results.length;i++){
                        newArr.push({
                            ...data.results[i],
                            _id: (Math.random() * data.results.length),
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
        // .finally(action((response)=> {
        //     console.log('FINALLY')
        //     // console.log({response})
        //     // let data = response.data
        //     // if(typeof(data.results) !== "undefined" && Array.isArray(data.results) && data.results.length > 0){
        //     //     this.result = data.results
        //     // }
        //     this.loading = false
        // }))
    }
}

export default new PlanetStore()