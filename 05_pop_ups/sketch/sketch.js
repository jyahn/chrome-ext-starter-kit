function setup() {
  noCanvas();
  let userinput = select('#userinput');
  console.log('userinput is', userinput);
  userinput.input(changeText);

  function changeText() {
    console.log('text changed');
    let params = {
      active: true,
      currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
      console.log("got tabs", tabs);
      //send a message to the content script
      let message = userinput.value();
      let msg = {
        txt: userinput.value()
      }
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }
  }
}
