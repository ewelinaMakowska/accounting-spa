import Api from '@/services/Api'

export default {
  getAllCompanies() {

    return Api.get('companies');
    //console.log("sent to server code");
  
 

  }
}