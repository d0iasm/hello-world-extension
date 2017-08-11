chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('Turning ' + tab.url + ' red!');
    alert('hello world!');
    chrome.tabs.executeScript({
	code: 'document.body.style.backgroundColor="red"'
    });
});
