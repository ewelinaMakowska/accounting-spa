import Api from '@/services/Api'

export default {
  GettAllSongs() {
    return Api.get('companies')
  }
}