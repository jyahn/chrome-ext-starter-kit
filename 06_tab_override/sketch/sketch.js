function setup() {
  noCanvas();
  let r = Math.floor(Math.random() * 8)
  let img = createImg('../dogs/dog' + r + '.jpg')
  img.size(windowWidth, windowHeight);
  img.position(0, 0);
}