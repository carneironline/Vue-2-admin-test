import axios from "axios";
import NProgress from 'nprogress'

export default class ApiService {
  static request({ method = 'get', resource = '', baseUrl = 'http://localhost:3000', params = {}, data = {} }) {
    const config = {
      method,
      url: `${baseUrl}/${resource}`,
      data,
      params,
      validateStatus: false
    }

    const instance = axios.create()

    // before a request is made start the nprogress
    instance.interceptors.request.use(config => {
      NProgress.start()
      return config
    })

    // before a response is returned stop nprogress
    instance.interceptors.response.use(response => {
      NProgress.done()
      return response
    })

    return instance(config)
  }
}
