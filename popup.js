

chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
    var url = tabs[0].url;
    theUrl="https://detecturl.herokuapp.com/api?query="+url;
    //console.log(url);
    if (url!="chrome://newtab/")
    {
        alert (theUrl);
    }
    

    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        chrome.runtime.reload();
    });
    //chrome.runtime.reload();
});










//chrome.tabs.onCreated.addListener(function(tab) {         
//    chrome.runtime.reload();
// });
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//    chrome.runtime.reload();
//});