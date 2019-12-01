console.log("Background extension go2");


// let paragraphs = document.getElementsByTagName('p');
// for (elt of paragraphs) {
//   elt.style['background-color'] = '#FF00FF';
// }

//Takes in a callback
chrome.runtime.onMessage.addListener(gotMessage);

// Receives message from the background script.
// if the msg.txt === hello, then change the background-color
// of all <p> elements on the current tab.
function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);
  if (message.txt === "hello") {
    let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {
      elt.style['background-color'] = '#FF00FF';
    }
  }
}
