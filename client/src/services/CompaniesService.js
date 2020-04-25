import Api from '@/services/Api'

export default {

  getAllCompanies() {
    return Api.get('companies');
    //console.log("sent to server code"); 
  },

  getLimited(page) {
    //return Api.get('companiesLimited/');
    return Api.get(`companiesLimited/?page=${page}`, page); //,page?

    // return Api.get('companiesLimited'), {
    //   page : {
    //     page : page
    //   }
    
    // };
  },

  getFiltered(search) {
    return Api.get(`companiesFiltered/?city=${search}`, search);
  },

  getFilteredLimited(value, page) {
    return Api.get(`companiesFilteredLimited/?city=${value}&page=${page}`, value, page);
  },

  // },

  getFirstLimited() {
    return Api.get('companiesFirst');
  },

  getOne(id) { //id?
    return Api.get(`company/${id}`, id); //,id?
   
  }

  // countAll() {
  //   return Api.get('companies');
  // }


}