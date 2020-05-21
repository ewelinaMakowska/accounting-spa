import Api from '@/services/Api'

export default {

  getAllCities() {
    return Api.get('cities');
    //console.log("sent to server code"); 
  }



}