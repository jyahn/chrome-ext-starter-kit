console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

var word = "foobar";


function receiver(request, sender, sendResponse) {
  console.log(request);
  word = request.text;
}