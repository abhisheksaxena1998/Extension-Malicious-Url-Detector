

chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
    var url = tabs[0].url;
    theUrl="https://detecturl.herokuapp.com/api?query="+url;
    theUrl2="https://malicious-url-detectorv5.herokuapp.com/result?url="+url;
    //console.log(url);
    if (url!="chrome://newtab/")
    {
        //alert (theUrl);
        /*var request = new XMLHttpRequest()

        request.open('GET', theUrl, true)
        request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            data.forEach(movie => {
            console.log(movie.malware)
            //alert(movie.malware)
            })
        } else {
            console.log('error')
        }
        }

        request.send()
        alert(request.responseText.malware)*/

        fetch(theUrl2)
        fetch(theUrl)
        .then(response => response.json())
        .then(data => {
        //console.log(data.malware);
        alert (url+"\n\n   <<-----MALWARE STATUS----->>   "+data.malware)// Prints result from `response.json()` in getRequest

        //console.log(type(data));
        if (data.malware==='false')
        {
            //console.log("false")
            alert("this site is safe")
            document.write("<h1>This site is safe</h1>");
        }
        else
        {
            document.write("Malicious Url!!")
        }


        })
        //.catch(error => console.error(error))
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