chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
        console.log(request)
        chrome.storage.sync.set({'fromPage': {pageUrl: sender?.tab?.url || "no domain", data: request.msg}}, function () {
          console.log("Just get", request.msg)
        });
        sendResponse({farewell: "goodbye"});
    }
  );
  console.log('Hello from BG')