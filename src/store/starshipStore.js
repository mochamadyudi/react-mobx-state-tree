import {observable, action} from 'mobx'
import ApiService from '../services/Api.service'
import Swal from 'sweetalert2'
class PlanetStore {
    @observable loading = true;
    @observable result = observable.map();
    @observable pagination = {total_page:0,page:1,next_page:1,prev_page:1,limit:10}
    @observable count = 0;
    @observable next = null;
    @observable previous = null;

    _delete(){

    }
    _created(){

    }

    _get(){

    }
    @action
    getPeople(params = {}){

    }


    @action
    deletePeople(id){}

    @action
    createPeople(data){

    }
}

export default new PlanetStore()