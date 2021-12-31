//namespacing
var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies

var en, wo
var box
function setup(){
  createCanvas(600,600);

  en = Engine.create()
  wo = en.world

  console.log(wo)

  box = Bodies.rectangle(200,200,50,50)
  World.add(wo, box)
}

function draw(){
    background(0);
    Engine.update(en)

    rect(box.position.x, box.position.y,50,50)

}