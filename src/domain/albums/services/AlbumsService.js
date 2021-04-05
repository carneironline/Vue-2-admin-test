import ApiService from '../../../shared/services/ApiService'

export default class AlbumsService {
  constructor() {
    this.resource = 'albums'
  }

  list() {
    return ApiService.request({ resource: this.resource })
  }

  get({ id = null }) {
    return ApiService.request({ resource: `${this.resource}/${id}` })
  }

  save({ data = {} } = {}) {
    return ApiService.request({ method: 'post', resource: this.resource, data })
  }
}
