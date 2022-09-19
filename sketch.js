var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 boyImg = loadAnimation ("Runner-1.png","Runner-2.png");
 pathImg = loadImage ("path.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.

path = createSprite(200, 200, 100, 200);
path.scale=1.2;
path.addImage(pathImg);
path.velocityY= +5
//crie um sprite de menino
//adicione uma animação de corrida para ele

rightBoundary= createSprite(400, 200, 20, 400);
rightBoundary.visible=!true

leftBoundary= createSprite(100, 200, 20, 400);
leftBoundary.visible= false
         boy=createSprite(200, 200, 20, 20);
                boy.scale=0.5;    
          boy.addAnimation(boyImg);
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);

//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  

  boy.x=World.mouseX;

  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
