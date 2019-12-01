//p5 looks for a setup and draw function
let s = function (sketch) {
  sketch.setup = function () {
    document.body.style['userSelect'] = 'none';
    let h = document.body.clientHeight;
    let c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    c.position(0, 0);
    //prevent elements on the page from being highlighted while drawing
    c.style('pointer-events', 'none');
    //draw over any element on any page
    c.style('z-index', '999');
    sketch.clear();
  }

  sketch.draw = function () {
    // background(0, 255, 0);
    sketch.stroke(0);
    sketch.strokeWeight(4);
    if (sketch.mouseIsPressed) {
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
  }
}

var myp5 = new p5(s);