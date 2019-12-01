console.log("background.js is running")



chrome.browserAction.setBadgeText({ text: '02' });
chrome.browserAction.setBadgeBackgroundColor({ color: '#4688F1' });
chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab) {
  console.log('button clicked');
  console.log(tab);
  let msg = {
    txt: "hello"
  }
  chrome.tabs.sendMessage(tab.id, msg);
}
