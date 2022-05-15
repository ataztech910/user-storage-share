console.log('Hello from content', { localStorage, cookies: document.cookie })
chrome.runtime.sendMessage({
    msg: JSON.stringify({ localStorage, cookies: document.cookie})
});

/* chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
        localStorage.setItem('test', '123')          
        sendResponse({farewell: "goodbye"});
    }
  ); */