import Api from './Api'

export default {

  getAllCompanies () {
    return Api.get('companies')
    // console.log("sent to server code");
  },

  getLimited (searchParams) {
    // return Api.get('companiesLimited/');
    return Api.get(`companiesLimited/?city=${searchParams.city}&sort=${searchParams.sort}&accounting=${searchParams.accounting}&contact=${searchParams.contact}&page=${searchParams.page}`, searchParams) 

    // return Api.get('companiesLimited'), {
    //   page : {
    //     page : page
    //   }

    // };
  },

  getFiltered (search) {
    return Api.get(`companiesFiltered/?city=${search}`, search)
  },

  getFilteredLimited (value, sort, accounting, contact, page) {
    return Api.get(`companiesFilteredLimited/?city=${value}&sort=${sort}&accounting=${accounting}&contact=${contact}&page=${page}`, value, sort, accounting, contact, page)
  },

  getByNameOrID (searchValue, page) {
    return Api.get(`editContent/?searchValue=${searchValue}&page=${page}`, searchValue, page)
  },

  // },

  getFirstLimited () {
    return Api.get('companiesFirst')
  },

  getOne(id) { // id?
    return Api.get(`company/${id}`, id) //, id?
  },

  // countAll() {
  //   return Api.get('companies');
  // }
  deleteCompany(companyId) {
    return Api.delete(`deleteCompany/${companyId}`, companyId)
  },

  addCompany(companyData) {
    return Api.post(`addCompany/?name=${companyData.name}&cityid=${companyData.cityId}&price=${companyData.price}&email=${companyData.email}&description=${companyData.description}&ledger=${companyData.ledger}&lumpsum=${companyData.lumpSum}&inperson=${companyData.inPerson}&additionalpoints=${companyData.additionalPoints}`, companyData)
  }
}
