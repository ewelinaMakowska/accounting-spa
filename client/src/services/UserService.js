import Api from '@/services/Api'

export default {

  getUserData(userData) {
    return Api.get('userProfile', {headers: {
      Authorization: 'Bearer' + userData.token
    }}, userData);
  }

}
