import defaultData from '../mock/object.json'
import { cookieStringToArray, objectToArray } from '../utils/convertions'

const currentBrowser = chrome;
const initBrowserData = (isDevelop = false) => {
  if (isDevelop) {
    return new Promise((resolve) => resolve(defaultData))
  }
  return new Promise(async (resolve) => {
    const dataObject: Partial<any> = {
      url: '',
      cookies: {} as any,
      storage: {} as any
    }
    await currentBrowser.storage.sync.get(null, function (result) {
      if (result.fromPage?.data) {
        const storage = JSON.parse(result.fromPage.data)
        dataObject.storage = objectToArray(storage.localStorage)
        dataObject.cookies = cookieStringToArray(storage.cookies)
        dataObject.url = storage.url
        if (dataObject.storage && dataObject.storage.cookies) {
          delete dataObject.storage.cookies
        }
        console.log('result', dataObject)
        resolve(dataObject)
      }
    })
  })
  
}

export { initBrowserData }
