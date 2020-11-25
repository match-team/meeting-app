import { HTTP_REQUEST } from '../../../utils/request.js'
class IndexModel extends HTTP_REQUEST {
  getList() {
    return this.request({
      url: ''
    })
  }
}
