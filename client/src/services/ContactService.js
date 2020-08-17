import Api from '@/services/Api'

export default {

  mailCompany(emailData) {
    return Api.post('email', emailData);
  }

}
