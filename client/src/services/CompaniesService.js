import Api from '@/services/Api'

export default {

  getAllCompanies() {
    return Api.get('companies');
    //console.log("sent to server code"); 
  },

  getLimited() {
    return Api.get('companiesLimited');
  },


  // },

  getFirstLimited() {
    return Api.get('companiesFirst');
  }

  // countAll() {
  //   return Api.get('companies');
  // }


}