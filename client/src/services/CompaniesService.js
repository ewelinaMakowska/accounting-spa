import Api from '@/services/Api'

export default {

  getAllCompanies() {
    return Api.get('companies');
    //console.log("sent to server code"); 
  },

  getLimited(page) {
    return Api.get(`companiesLimited/?page=${2}`, page); //,page?
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