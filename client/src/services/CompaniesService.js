import Api from '@/services/Api'

export default {

  getAllCompanies() {
    return Api.get('companies');
    //console.log("sent to server code"); 
  },

  getLimited() {
    return Api.get('companies');
  }
  // },

  // getFirstLimited() {
  //   return Api.get('companies');
  // },

  // countAll() {
  //   return Api.get('companies');
  // }


}