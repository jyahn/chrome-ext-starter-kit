console.log('Dogs of the world, unite as one!');



let filenames = [
  "dog0.jpg",
  "dog1.jpg",
  "dog2.jpg",
  "dog3.jpg",
  "dog4.jpg",
  "dog5.jpg"
]

let imgs = document.getElementsByTagName('img');


for (imgElt of imgs) {
  let r = (Math.floor(Math.random() * filenames.length));
  console.log("r is ", r);
  let file = 'dogs/' + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}