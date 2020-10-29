var block1, block2, block3, block4, block5, block6, block7, block8;
var block9, block10, block11, block12, block13, block14, block15, block16,
  blockGroup1, block_Img, blockGroup2, blockGroup3, blockGroup4;
var playertank1,playertank2,playertank3, player1L_img, player1R_img, player1U_img, player1D_img,
  player_direction, pbulletGroup, playertanklives, playeralive;
var etank, etank_Dimg, etank_Uimg, etank_Rimg, etank_Limg, etankGroup,
  etankDirection, etanklives, ebulletGroup;
var bulletL_img, bulletR_img, bulletU_img, bulletD_img;
var edges,ptank;
var boomimage;
var treeimage;
var gameState="PLAY";
var eTankDeath=0;
function preload() {
  player1R_img = loadImage("Images/HtankR.gif")
  player1L_img = loadImage("Images/HtankL.gif")
  player1D_img = loadImage("Images/HtankD.gif")
  player1U_img = loadImage("Images/HtankU.gif")

  etank_Dimg = loadImage("Images/tankD.gif")
  etank_Uimg = loadImage("Images/tankU.gif");
  etank_Limg = loadImage("Images/tankL.gif");
  etank_Rimg = loadImage("Images/tankR.gif");
  bulletL_img = loadImage("Images/bulletL.gif")
  bulletR_img = loadImage("Images/bulletR.gif")
  bulletU_img = loadImage("Images/bulletU.gif")
  bulletD_img = loadImage("Images/bulletD.gif")
  boomimage = loadImage("Images/5.gif")
  block_Img = loadImage("Images/Block.gif")
  treeimage = loadImage("Images/tree.gif")

}

function setup() {
  createCanvas(600, 600);
  createBlocks()


  etankGroup = new Group();
  pbulletGroup = new Group();
  ebulletGroup = new Group();
  blockGroup1 = new Group();
  blockGroup2 = new Group();
  blockGroup3 = new Group();
  blockGroup4 = new Group();

  etanklives = 0;
  playertanklives = 3;
  playeralive = true;

  playertank1 = createSprite(250, 380, 50, 50);
  playertank1.addImage(player1U_img);
  playertank2 = createSprite(250, 380, 50, 50);
  playertank2.addImage(player1U_img);
  playertank3 = createSprite(250, 380, 50, 50);
  playertank3.addImage(player1U_img);
  ptank=[];
  ptank.push(playertank3);
  ptank.push(playertank2);
  ptank.push(playertank1);
  playertank1.visible=false;
  playertank2.visible=false;
  playertank3.visible=false;
}

function draw() {
  background("black")
  

  edges = createEdgeSprites();

  if (etankGroup.isTouching(edges[0]))
    etankDirection = "L"
  else if (etankGroup.isTouching(edges[1]))
    etankDirection = "R"
  else if (etankGroup.isTouching(edges[2]))
    etankDirection = "U"
  else if (etankGroup.isTouching(edges[3]))
    etankDirection = "D"
  switch (etankDirection) {
    case "L":
      etankGroup.bounceOff(edges[0]);
      etank_changeimg(etank_Rimg, "R")

      break;
    case "R":
      etankGroup.bounceOff(edges[1]);
      etank_changeimg(etank_Limg, "L")


      break;
    case "U":
      etankGroup.bounceOff(edges[2]);
      etank_changeimg(etank_Dimg, "D")

      break;
    case "D":
      etankGroup.bounceOff(edges[3]);
      etank_changeimg(etank_Uimg, "U")


      break;
  }
  if (etanklives < 6) {
    spawnEtank();
  }
if (ptank.length){
ptank[ptank.length-1].visible=true;


  move(ptank[ptank.length-1]);
  ptank[ptank.length-1].collide(edges);

  if (keyDown("space") && playeralive === true) {
    pbullet(ptank[ptank.length-1], player_direction);
  }

  for (var i = 0; i < etankGroup.length; i++) {
    var sprite = etankGroup.get(i)
    if (pbulletGroup.isTouching(sprite)) {
      image(boomimage, sprite.x, sprite.y);
      sprite.destroy();
eTankDeath++;
    }
  }

  if (ebulletGroup.isTouching(ptank[ptank.length-1])) {
    image(boomimage, ptank[ptank.length-1].x, ptank[ptank.length-1].y);
    ptank[ptank.length-1].destroy();
    //playeralive = false;
    playertanklives--;
    if (playertanklives!==-1){
      
      ptank.pop();
    }

  }

}else{
  playeralive = false;
  gameState="END";
}
  /*if(pbulletGroup.isTouching(block1)||ebulletGroup.isTouching(block1))
    {
      block1.destroy()
    }*/


  hit_destroy(pbulletGroup, block1);
  hit_destroy(pbulletGroup, block2);
  hit_destroy(pbulletGroup, block3);
  hit_destroy(pbulletGroup, block4);
  hit_destroy(pbulletGroup, block5);
  hit_destroy(pbulletGroup, block6);
  hit_destroy(pbulletGroup, block7);
  hit_destroy(pbulletGroup, block8);
  hit_destroy(pbulletGroup, block9);
  hit_destroy(pbulletGroup, block10);
  hit_destroy(pbulletGroup, block11);
  hit_destroy(pbulletGroup, block12);
  hit_destroy(pbulletGroup, block13);
  hit_destroy(pbulletGroup, block14);
  hit_destroy(pbulletGroup, block15);
  hit_destroy(pbulletGroup, block16);


  hit_destroy(ebulletGroup, block1);
  hit_destroy(ebulletGroup, block2);
  hit_destroy(ebulletGroup, block3);
  hit_destroy(ebulletGroup, block4);
  hit_destroy(ebulletGroup, block5);
  hit_destroy(ebulletGroup, block6);
  hit_destroy(ebulletGroup, block7);
  hit_destroy(ebulletGroup, block8);
  hit_destroy(ebulletGroup, block9);
  hit_destroy(ebulletGroup, block10);
  hit_destroy(ebulletGroup, block11);
  hit_destroy(ebulletGroup, block12);
  hit_destroy(ebulletGroup, block13);
  hit_destroy(ebulletGroup, block14);
  hit_destroy(ebulletGroup, block15);
  hit_destroy(ebulletGroup, block16);
  console.log(eTankDeath)
if(eTankDeath>=6){
alert("You Won");
}
  if(gameState==="END"){
    alert("Game Over")
  }
  drawSprites();
}

function etank_changeimg(img, direct) {
  for (var i = 0; i < etankGroup.length; i++) {
    var sprite = etankGroup.get(i)
    sprite.addImage(img);

    if (frameCount % 50 === 0) {
      ebullet(sprite, direct)
    }
  }

}

function spawnEtank() {
  if (frameCount % 50 === 0) {
    etank = createSprite(250, 10, 50, 50);
    etank.addImage(etank_Dimg);
    etank.x = Math.round(random(10, 480));
    etank.setVelocity(2, 2);
    ebullet(etank, "D")
    etankGroup.add(etank);
    etanklives++;
  }

}

function pbullet(object1, direction) {

  var bullet1 = createSprite(200, 300, 5, 5);
  pbullet.lifetime = 5;
  bullet1.x = object1.x;
  bullet1.y = object1.y;

  pbulletGroup.add(bullet1);
  switch (direction) {
    case "L":
      bullet1.addImage(bulletL_img);
      bullet1.velocityX = -5;
      break
    case "R":
      bullet1.addImage(bulletR_img);
      bullet1.velocityX = 5;
      break
    case "U":
      bullet1.addImage(bulletU_img);
      bullet1.velocityY = -5;
      break
    case "D":
      bullet1.addImage(bulletD_img);
      bullet1.velocityY = 5;
      break
  }

}

function ebullet(object1, direction) {

  var bullet1 = createSprite(200, 300, 5, 5);
  ebullet.lifetime = 5;
  bullet1.x = object1.x;
  bullet1.y = object1.y;

  ebulletGroup.add(bullet1);
  switch (direction) {
    case "L":
      bullet1.addImage(bulletL_img);
      bullet1.velocityX = -5;
      break
    case "R":
      bullet1.addImage(bulletR_img);
      bullet1.velocityX = 5;
      break
    case "U":
      bullet1.addImage(bulletU_img);
      bullet1.velocityY = -5;
      break
    case "D":
      bullet1.addImage(bulletD_img);
      bullet1.velocityY = 5;
      break
  }

}

function move(player) {

  if (keyDown("left_arrow")) {
    player.x = player.x - 20;
    player.addImage(player1L_img)
    player_direction = "L"
  }
  if (keyDown("right_arrow")) {
    player.x = player.x + 20;
    player.addImage(player1R_img);
    player_direction = "R"
  }
  if (keyDown("down_arrow")) {
    player.y = player.y + 20;
    player.addImage(player1D_img);
    player_direction = "D"
  }
  if (keyDown("up_arrow")) {
    player.y = player.y - 20;
    player.addImage(player1U_img)
    player_direction = "U"
  }
}

function hit_destroy(obj1, obj2) {
  if (obj1.isTouching(obj2)) {
    obj2.destroy()
  }

}

function createBlocks() {
  block1 = createSprite(150, 250, 50, 50);
  block1.addImage(treeimage);

  block2 = createSprite(150, 200, 50, 50);
  block2.addImage(block_Img);
  //block2.scale=1.2;
  block3 = createSprite(150, 150, 50, 50);
  block3.addImage(block_Img);
  // block3.scale=2
  block4 = createSprite(350, 250, 50, 50);
  block4.addImage(block_Img);
  //block4.scale=2
  block5 = createSprite(350, 200, 50, 50);
  block5.addImage(block_Img);
  //block5.scale=2
  block6 = createSprite(350, 150, 50, 50);
  block6.addImage(block_Img);
  //block6.scale=2
  block7 = createSprite(250, 500, 50, 50);
  block7.addImage(block_Img);
  //block7.scale=2
  block8 = createSprite(200, 500, 50, 50);
  block8.addImage(block_Img);
  //block8.scale=2
  block9 = createSprite(300, 500, 50, 50);
  block9.addImage(block_Img);
  //block9.scale=2
  block10 = createSprite(350, 500, 50, 50);
  block10.addImage(block_Img);
  //block10.scale=2
  block11 = createSprite(100, 350, 50, 50);
  block11.addImage(block_Img);
  //block11.scale=2
  block12 = createSprite(400, 350, 50, 50);
  block12.addImage(block_Img);
  //block12.scale=2
  block13 = createSprite(100, 100, 40, 40);
  block13.addImage(block_Img);
  //block13.scale=2
  block14 = createSprite(100, 60, 40, 40);
  block14.addImage(block_Img);
  //block14.scale=2
  block15 = createSprite(400, 100, 40, 40);
  block15.addImage(block_Img);
  //block15.scale=2
  block16 = createSprite(400, 60, 40, 40);
  block16.addImage(block_Img);
  //block16.scale=2
}
