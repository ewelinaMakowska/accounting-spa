import Api from '@/services/Api'

export default {

  getUserData(userData) {
    return Api.get('userProfile', {'Test-Header': 'test-value'}, userData);
  }

}
