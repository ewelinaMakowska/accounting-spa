import Api from '@/services/Api'

export default {

  registerUser(userData) {
    return Api.post('register', userData);
  }

}
