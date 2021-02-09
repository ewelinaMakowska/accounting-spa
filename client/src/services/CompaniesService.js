import Api from './Api'

export default {

  getAllCompanies () {
    return Api.get('companies')
    // console.log("sent to server code");
  },

  getLimited (searchParams) {
    // return Api.get('companiesLimited/');
    return Api.get(`companiesLimited/?city=${searchParams.city}&sort=${searchParams.sort}&accounting=${searchParams.accounting}&page=${searchParams.page}`, searchParams) 

    // return Api.get('companiesLimited'), {
    //   page : {
    //     page : page
    //   }

    // };
  },

  getFiltered (search) {
    return Api.get(`companiesFiltered/?city=${search}`, search)
  },

  getFilteredLimited (value, sort, accounting, page) {
    return Api.get(`companiesFilteredLimited/?city=${value}&sort=${sort}&accounting=${accounting}&page=${page}`, value, sort, accounting, page)
  },

  // },

  getFirstLimited () {
    return Api.get('companiesFirst')
  },

  getOne(id) { // id?
    return Api.get(`company/${id}`, id) //, id?
  }

  // countAll() {
  //   return Api.get('companies');
  // }

}
