import Api from '@/services/Api'

export default {

  getUserData(userData) {
    return Api.get('userData', userData);
  }

}
