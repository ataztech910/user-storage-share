const currentBrowser = chrome
const initBrowserData = async () => {
    if (!currentBrowser || !currentBrowser.tabs) {
        return null
    }
    let dataObject = {
        url: '',
        cookies: [] as Partial<any>[],
        storage: null
    }
    let [tab] = await currentBrowser.tabs.query({ active: true, currentWindow: true });
    if (tab?.url) {
      try {
        let url = new URL(tab.url);
        dataObject.url = url.hostname
        dataObject.cookies = await currentBrowser.cookies.getAll({ domain: url.hostname })
        currentBrowser.storage.sync.get(null, function(result) {
            if (result.fromPage?.data) {
                dataObject.storage = JSON.parse(result.fromPage.data)
            }
        })
      } catch {}
    }
    console.log(dataObject)
    return dataObject
}


export { initBrowserData }