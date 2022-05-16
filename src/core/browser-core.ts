import defaultData from '../mock/object.json'
import { cookieStringToArray, objectToArray } from '../utils/convertions'

const currentBrowser = chrome;
const initBrowserData = (isDevelop = false) => {
  if (isDevelop) {
    return new Promise((resolve) => resolve(defaultData))
  }
  return new Promise(async (resolve, reject) => {
    const dataObject: Partial<any> = {
      url: '',
      cookies: {} as any,
      storage: {} as any
    }
    await currentBrowser.storage.local.get(null, function (result) {
      console.log(result)
      if (result.fromPage?.data) {
        
        try {
          const storage = JSON.parse(result.fromPage.data)
          dataObject.storage = objectToArray(JSON.parse(storage.localStorage))
          dataObject.cookies = cookieStringToArray(storage.cookies)
          dataObject.url = storage.url
          resolve(dataObject)
        } catch (e) {
          console.log('Error', e)
          reject(result.fromPage.data);
        }
        
      }
    })
  })
  
}

export { initBrowserData }
