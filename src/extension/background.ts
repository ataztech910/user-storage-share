import { lzw_decode } from "./compress";

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('sender?.tab?.url', sender?.tab?.url)
        chrome.storage.managed.clear()
        chrome.storage.local.set({'fromPage': {pageUrl: sender?.tab?.url || "no domain", data: lzw_decode(request.msg)}}, function () {
          console.log("local storage", typeof lzw_decode(request.msg))
          console.log("local storage", lzw_decode(request.msg))
        });
        sendResponse({farewell: "goodbye"});
    }
  );
  console.log('Hello from BG')