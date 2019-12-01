console.log('Chrome extension go?');

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
  //store the highlighted text in a variable
  let selectedText = window.getSelection().toString().trim();
  console.log(selectedText);
  if (selectedText.length > 0) {
    let message = {
      text: selectedText
    }
    //send the message which includes the highlighted text to the background script
    chrome.runtime.sendMessage(message);
  }
}