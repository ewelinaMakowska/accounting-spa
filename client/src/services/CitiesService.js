import Api from './Api'

export default {

  getAllCities () {
    return Api.get('cities')
    // console.log("sent to server code");
  },
  getFilteredLimited (value) {
    return Api.get(`citiesFilteredLimited/?name=${value}`, value)
  },
  addCity(City) {
    console.log('SERVICE')
    console.log(City.name, City.region)
    //return Api.post(`addCity/?name=${City.name}&region=${City.region}`)
    return Api.post('addCity', City)
  }

}
