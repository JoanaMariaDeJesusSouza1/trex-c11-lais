var trex, trexRunning;
var edges;
var solo, imagemSolo;
var SoloInvisivel;


//preload carrega as midías
function preload(){
 //animação do Trex
  trexRunning = loadAnimation("trex1.png","trex3.png","trex4.png");
  //imagem do solo
  imagemSolo = loadImage("ground2.png");

}
//setup faz aconfiguração
function setup(){
  createCanvas(600,200)
  // criando as bordas
  edges = createEdgeSprites();
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  // adicione dimensão e posição ao trex
  trex.addAnimation("running", trexRunning);
  trex.scale=0.5;
  //sprite do solo
  solo =createSprite(300,170,600,2);
  solo.addImage("solo", imagemSolo);
  soloInvisivel = createSprite(300,190,600,2);
  soloInvisivel.visible = false;
}
//draw faz o movimento, a ação do jogo
function draw(){
  background("gray");


  // dando velocidade ao solo
  solo.velocityX =-10;
  // fazero trex pular
    if(keyDown("space")&& trex.y>164) {
       trex.velocityY = -10;
 }//conferindo a rolagem do solo
      if( solo.x<0){
        solo.x=solo.width/2;
    }
 //coordenadas do mouse na tela
   text("X: "+mouseX+"  / Y: "+mouseY,mouseX,mouseY);
  
 // chamando a  função de gravidade
  gravity();
  //colisão do trex com as bordas
    trex.collide(soloInvisivel);
    //console.log(trex.Y);

  
  drawSprites();

}
// função de gravidade
function gravity(){
  trex.velocityY+=0.5;
}
