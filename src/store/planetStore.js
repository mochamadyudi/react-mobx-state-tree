import { observable, action} from 'mobx'
import ApiService from '../services/Api.service'

class PlanetStore{
  @observable loading;
  @observable result;
  @observable count;
  @observable next;
  @observable previous;

  planetList(params = {}){
    return new ApiService({url:"/planets",config:{params}}).get()
  }

  @action getPlanetList(params = {}){
    this.loading = true;
    return this.getPlanetList(params)
      .then((response)=> {
        action(( )=> {
          this.result = response?.data
        })
      })
  }
}