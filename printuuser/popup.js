 document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('button').addEventListener('click',function(){
      // alert('hi')
            chrome.tabs.query({currentWindow:true, active:true},function(tabs){
          chrome.tabs.sendMessage(tabs[0].id,"this message was sent from extension")
         })
     },false)
 },false)