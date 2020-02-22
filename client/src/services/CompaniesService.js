import Api from '@/services/Api'

export default {

  getAllCompanies() {
    return Api.get('companies');
    //console.log("sent to server code"); 
  },

  getLimited(page) {
    //return Api.get('companiesLimited/');
    return Api.get(`companiesLimited/?page=${1}`, page); //,page?

    // return Api.get('companiesLimited'), {
    //   page : {
    //     page : page
    //   }
    
    // };
  },


  // },

  getFirstLimited() {
    return Api.get('companiesFirst');
  },

  getOne() { //id?
    return Api.get('company/1'); //,id?
   
  }

  // countAll() {
  //   return Api.get('companies');
  // }


}