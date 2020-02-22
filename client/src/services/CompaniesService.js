import Api from '@/services/Api'

export default {

  getAllCompanies() {
    return Api.get('companies');
    //console.log("sent to server code"); 
  },

  getLimited(queryPage) {
    return Api.get('companiesLimited', queryPage); //,page?
  },


  // },

  getFirstLimited() {
    return Api.get('companiesFirst');
  },

  getOne(id) {
    return Api.get('companies', id);
  }

  // countAll() {
  //   return Api.get('companies');
  // }


}