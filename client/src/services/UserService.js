import Api from '@/services/Api'

export default {

  getUserData(token) {
    return Api.get('userProfile', { headers: {
      Authorization: 'Bearer' + ' ' + token.slice(1, -1)
    }}, token);
  }

}
