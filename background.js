const github = 'https://github.com/googleapis/google-cloud-php/pull/';
chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
        if (tab.url.startsWith(github)) {
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['formatpr.js'],
            });
        }
    });
});