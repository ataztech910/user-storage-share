console.log('Hello from content', { localStorage, cookies: document.cookie })
chrome.runtime.sendMessage({
    msg: JSON.stringify({ localStorage, cookies: document.cookie, url: document.location.href})
});