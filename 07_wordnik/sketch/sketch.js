// This code runs when the pop up opens

var wordnik1 = 'http://api.wordnik.com:80/v4/word.json/'
var wordnik2 = '/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false';
var api_key = '&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7';

function setup() {
  noCanvas();

  //access a global variable in the background script
  let bgpage = chrome.extension.getBackgroundPage()
  var word = bgpage.word
  var url = wordnik1 + word + wordnik2 + api_key;
  console.log("url is ", url)


  loadJSON(url, gotData);


  function gotData(data) {
    console.log(data[0])
    createP(data[0].text).style('font-size', '48px');
  }
}