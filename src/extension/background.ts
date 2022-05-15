chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log('sender?.tab?.url', sender?.tab?.url)
      console.log('fromPage', request.msg);
        chrome.storage.sync.set({'fromPage': {pageUrl: sender?.tab?.url || "no domain", data: request.msg}}, function () {
          console.log("local storage")
        });
        sendResponse({farewell: "goodbye"});
    }
  );
  console.log('Hello from BG')