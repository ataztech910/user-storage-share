console.log('Hello from content')
chrome.runtime.sendMessage({
    msg: JSON.stringify(localStorage)
});