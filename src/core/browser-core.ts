import defaultData from '../mock/object.json'
import { cookieStringToArray } from '../utils/convertions'
const currentBrowser = chrome
const initBrowserData = async (isDevelop = false) => {
  if (isDevelop) {
    return defaultData
  }
  if (!currentBrowser || !currentBrowser.tabs) {
    return null
  }
  const dataObject = {
    url: '',
    cookies: {} as any,
    storage: {} as any
  }
  const [tab] = await currentBrowser.tabs.query({ active: true, currentWindow: true })
  if (tab?.url) {
    try {
      const url = new URL(tab.url)
      dataObject.url = url.hostname
      currentBrowser.storage.sync.get(null, function (result) {
        if (result.fromPage?.data) {
          dataObject.storage = JSON.parse(result.fromPage.data)
          dataObject.cookies = cookieStringToArray(dataObject.storage.cookies)
          if (dataObject.storage && dataObject.storage.cookies) {
            delete dataObject.storage.cookies
          }
        }
      })
    } catch {}
  }
  return dataObject
}

export { initBrowserData }
