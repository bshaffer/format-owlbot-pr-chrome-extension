const prregex = /https:\/\/github.com\/googleapis\/.*\/pull\//;
chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
        if (prregex.test(tab.url)) {
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['formatpr.js'],
            });
        }
    });
});