/* eslint-disable eqeqeq */
import axios from 'axios' // 引入axios
import qs from 'qs' // 引入qs
/**
 * post 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function ajaxPost (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data, { arrayFormat: 'repeat' })).then(
      response => {
        resolve(response)
      },
      err => {
        reject(err)
        console.log(err)
      }
    )
  })
}

/**
 * get 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function ajaxGet (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: data }).then(
      response => {
        resolve(response)
      },
      err => {
        reject(err)
      }
    )
  })
}