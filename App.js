let screen='title'
let correctness=''
let f=0
let subject = ['Math', 'Biology', 'Physics', 'Chemistry', 'Geology', 'Astronomy']
let MQ = [];
let BQ = [];
let PQ = [];
let CQ = [];
let GQ = [];
let AQ = [];
let ratioCalc;
let AllRight;
let logo;
let Acompleted = false
let Bcompleted = false
let Mcompleted = false
let Pcompleted = false
let Ccompleted = false
let Gcompleted = false 

function setup(){
    createCanvas(420, 690)
    frameRate(60)
    background(220)
    rectMode(CENTER)
    ellipseMode(CENTER)
    textAlign(CENTER)
    noStroke()
  imageMode(CENTER)
}

function backgroundimg(){}
function draw(){
 
  if (asc >= 5 || msc >= 5 ||psc >= 5 || csc >= 5 ||bsc >= 5 || gsc >= 5){
    fill(220)
    rect(width/2, height/2, 1000,1000)
    screen = 'inst'
    screen ='topic'
    correctness=''
    

    if(asc >=5){
      Acompleted = true;
    }
    if(msc >=5){
      Mcompleted = true;
    }
    if(psc >=5){
      Pcompleted = true;
    }
    if(csc >=5){
      Ccompleted = true;
    }
    if(bsc >=5){
      Bcompleted = true;
    }
    if(gsc >=5){
      Gcompleted = true;
    }


    asc = 0
    msc = 0
    psc = 0
    csc = 0
    bsc = 0
    gsc = 0
    

  }
  
  if (screen=='title'){
    title()
    noStroke()
    
  }
  if (screen=='topic'){
    topic()
    drawStarforCorrect()
  }
  if (screen=='inst'){
    instructions()
  }
  if (screen=='Math'){
    math()
  }
  if (screen=='Biology'){
    bio()
  }
  if (screen=='Physics'){
    phys()
  }
  if (screen=='Chemistry'){
    chem()
  }
  if (screen=='Geology'){
    geo()
  }
  if (screen=='Astronomy'){
    astro()
  }
  correctText()
  
}
function correctText(){
  textSize(40)
  text(correctness,210,325)
}

function preload(){
  logo = loadImage('Questions/DECORATIONS/STEM.png')
  
   MQAns = ['C','D','C','C','A']
   MQ[0]=(loadImage('Questions/Math Questions/MQ1C.png'))
   MQ[1]= loadImage('Questions/Math Questions/MQ2D.png')
   MQ[2]= loadImage('Questions/Math Questions/MQ3C.png')
   MQ[3]=loadImage('Questions/Math Questions/MQ4C.png')
   MQ[4]=loadImage('Questions/Math Questions/MQ5A.png')
  
   BQAns = ['D', 'E', 'D', 'E', 'A']
   BQ[0] = loadImage('Questions/Bio_Q/BQ1D.png')
   BQ[1] = loadImage('Questions/Bio_Q/BQ2E.png')
   BQ[2] = loadImage('Questions/Bio_Q/BQ3D.png')
   BQ[3] = loadImage('Questions/Bio_Q/BQ4E.png')
   BQ[4] = loadImage('Questions/Bio_Q/BQ5A.png')

  CQAns = ['D', 'C', 'D', 'A', 'D']
  CQ[0] = loadImage('Questions/Chem_Q/CQ1D.png')
  CQ[1] = loadImage('Questions/Chem_Q/CQ2C.png')
  CQ[2] = loadImage('Questions/Chem_Q/CQ3D.png')
  CQ[3] = loadImage('Questions/Chem_Q/CQ4A.png')
  CQ[4] = loadImage('Questions/Chem_Q/CQ5D.png')

  PQAns = ['D', 'B', 'B', 'C', 'D']
  PQ[0] = loadImage('Questions/Phy_Q/PQ1D.png')
  PQ[1] = loadImage('Questions/Phy_Q/PQ2B.png')
  PQ[2] = loadImage('Questions/Phy_Q/PQ3B.png')
  PQ[3] = loadImage('Questions/Phy_Q/PQ4C.png')
  PQ[4] = loadImage('Questions/Phy_Q/PQ5D.png')

  GQAns = ['C', 'C', 'D', 'B', 'A']
  GQ[0] = loadImage('Questions/Geo_Q/GQ1C.png')
  GQ[1] = loadImage('Questions/Geo_Q/GQ2C.png')
  GQ[2] = loadImage('Questions/Geo_Q/GQ3D.png')
  GQ[3] = loadImage('Questions/Geo_Q/GQ4B.png')
  GQ[4] = loadImage('Questions/Geo_Q/GQ5A.png')

  AQAns = ['B', 'C', 'D', 'B', 'D']
  AQ[0] = loadImage('Questions/Astro_Q/AQ1B.png')
  AQ[1] = loadImage('Questions/Astro_Q/AQ2C.png')
  AQ[2] = loadImage('Questions/Astro_Q/AQ3D.png')
  AQ[3] = loadImage('Questions/Astro_Q/AQ4B.png')
  AQ[4] = loadImage('Questions/Astro_Q/AQ5D.png')



  
}

function touchStarted(){
  if (screen=='title'){
    if (mouseX>=35&&mouseX<=395&&mouseY>=445&&mouseY<=515){
          screen='inst'   
    }
  }
  else if (screen == 'inst'&&mouseX>=30&&mouseX<=390&&mouseY>=560&&mouseY<=640){
    screen = 'topic'
  }
  else if (screen=='topic'){
    if (mouseX>=35&&mouseX<=385){
      for (let i=0;i<6;i++){
        if (mouseY>=i*90+55&&mouseY<=i*90+125){
          screen=subject[i]
        }
      }
    }
  }
  else if (screen!='title'&&screen!='inst'&&screen!='topic'){
    if (screen=='Math'){
      if (mouseX>=20&&mouseX<=204&&mouseY>=350&&mouseY<=450){
        if (MQAns[msc]=='A'){
          msc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=216&&mouseX<=400&&mouseY>=350&&mouseY<=450){
        if (MQAns[msc]=='B'){
          msc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=20&&mouseX<=204&&mouseY>=460&&mouseY<=560){
        if (MQAns[msc]=='C'){
          msc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=216&&mouseX<=400&&mouseY>=460&&mouseY<=560){
        if (MQAns[msc]=='D'){
          msc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=148&&mouseX<=302&&mouseY>=570&&mouseY<=670){
        if (MQAns[msc]=='E'){
          msc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
    }
    else if (screen=='Biology'){
      if (mouseX>=20&&mouseX<=204&&mouseY>=350&&mouseY<=450){
        if (BQAns[bsc]=='A'){
          bsc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=216&&mouseX<=400&&mouseY>=350&&mouseY<=450){
        if (BQAns[bsc]=='B'){
          bsc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=20&&mouseX<=204&&mouseY>=460&&mouseY<=560){
        if (MQAns[bsc]=='C'){
          bsc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=216&&mouseX<=400&&mouseY>=460&&mouseY<=560){
        if (BQAns[bsc]=='D'){
          bsc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=148&&mouseX<=302&&mouseY>=570&&mouseY<=670){
        if (BQAns[bsc]=='E'){
          bsc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
    }
    else if (screen=='Physics'){
      if (mouseX>=20&&mouseX<=204&&mouseY>=350&&mouseY<=450){
        if (PQAns[psc]=='A'){
          psc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=216&&mouseX<=400&&mouseY>=350&&mouseY<=450){
        if (PQAns[psc]=='B'){
          psc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=20&&mouseX<=204&&mouseY>=460&&mouseY<=560){
        if (PQAns[psc]=='C'){
          psc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=216&&mouseX<=400&&mouseY>=460&&mouseY<=560){
        if (PQAns[psc]=='D'){
          psc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=148&&mouseX<=302&&mouseY>=570&&mouseY<=670){
        if (PQAns[psc]=='E'){
          psc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
    }
    else if (screen=='Chemistry'){
      if (mouseX>=20&&mouseX<=204&&mouseY>=350&&mouseY<=450){
        if (CQAns[csc]=='A'){
          csc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=216&&mouseX<=400&&mouseY>=350&&mouseY<=450){
        if (CQAns[csc]=='B'){
          csc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=20&&mouseX<=204&&mouseY>=460&&mouseY<=560){
        if (CQAns[csc]=='C'){
          csc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=216&&mouseX<=400&&mouseY>=460&&mouseY<=560){
        if (CQAns[csc]=='D'){
          csc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=148&&mouseX<=302&&mouseY>=570&&mouseY<=670){
        if (CQAns[csc]=='E'){
          csc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
    }
    else if (screen=='Geology'){
      if (mouseX>=20&&mouseX<=204&&mouseY>=350&&mouseY<=450){
        if (GQAns[gsc]=='A'){
          gsc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=216&&mouseX<=400&&mouseY>=350&&mouseY<=450){
        if (GQAns[gsc]=='B'){
          gsc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=20&&mouseX<=204&&mouseY>=460&&mouseY<=560){
        if (GQAns[gsc]=='C'){
          gsc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=216&&mouseX<=400&&mouseY>=460&&mouseY<=560){
        if (GQAns[gsc]=='D'){
          gsc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=148&&mouseX<=302&&mouseY>=570&&mouseY<=670){
        if (GQAns[gsc]=='E'){
          gsc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
    }
    else if (screen=='Astronomy'){
      if (mouseX>=20&&mouseX<=204&&mouseY>=350&&mouseY<=450){
        if (AQAns[asc]=='A'){
          asc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=216&&mouseX<=400&&mouseY>=350&&mouseY<=450){
        if (AQAns[asc]=='B'){
          asc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=20&&mouseX<=204&&mouseY>=460&&mouseY<=560){
        if (AQAns[asc]=='C'){
          asc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=216&&mouseX<=400&&mouseY>=460&&mouseY<=560){
        if (AQAns[asc]=='D'){
          asc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
      if (mouseX>=148&&mouseX<=302&&mouseY>=570&&mouseY<=670){
        if (AQAns[asc]=='E'){
          asc+=1
          correct()
        }
        else{
          incorrect()
        }
      }
    }
  }
}

function title(){
  //STEM.io title text
  fill(0)
  ratioCalc = logo.height/logo.width
  logo.width = 420
  logo.height = ratioCalc*420
  image(logo, width/2, height*.125)
  
  //CLICK TO START RECTANGLE
  fill(255)
  rect(210, 480, 350, 70,20,60,20,60)
  //CLICK TO START text
  fill(0)
  textSize(width/8)
  text('Click to Start', width/2, 500)
}

function topic(){
  background(220)
  for(let i = 0; i<6; i++){
    textSize(width/8)
    fill(255)
    rect(210, i*90+90,350, 70,20,60,20,60)
    fill(0)
    text(subject[i],width/2,i*90+105)

    ratioCalc = logo.height/logo.width
    logo.width = 420
    logo.height = ratioCalc*420
    image(logo, width/2, height*.925)
  }
}
msc = 0
bsc = 0
psc = 0
csc = 0
gsc = 0
asc = 0
function math(){
  background(220)
  ratioCalc = logo.height/logo.width
  logo.width = 420
  logo.height = ratioCalc*420
  image(logo, width/2, height*.05)
  for (let i = 0; i<5; i++){
     ratioCalc = MQ[i].height/MQ[i].width
    MQ[i].width = 420
    MQ[i].height = ratioCalc*420
  }
  fill(255)
  rect(112,400,184,100,20,60,20,60)
  rect(308,400,184,100,20,60,20,60)
  rect(112,510,184,100,20,60,20,60)
  rect(308,510,184,100,20,60,20,60)
  rect(210,620,184,100,20,60,20,60)
  fill(0)
  textSize(75)
  text('A',112,430)
  text('B',308,430)
  text('C',112,540)
  text('D',308,540)
  text('E',210,650)
  image(MQ[msc], width*.5, .25*height)
  
}

function bio(){
  background(220)
  ratioCalc = logo.height/logo.width
  logo.width = 420
  logo.height = ratioCalc*420
  image(logo, width/2, height*.05)
  for (let i = 0; i<5; i++){
     ratioCalc = BQ[i].height/BQ[i].width
    BQ[i].width = 420
    BQ[i].height = ratioCalc*420

  }
  fill(255)
  rect(112,400,184,100,20,60,20,60)
  rect(308,400,184,100,20,60,20,60)
  rect(112,510,184,100,20,60,20,60)
  rect(308,510,184,100,20,60,20,60)
  rect(210,620,184,100,20,60,20,60)
  fill(0)
  textSize(75)
  text('A',112,430)
  text('B',308,430)
  text('C',112,540)
  text('D',308,540)
  text('E',210,650)
  
  image(BQ[bsc], width*.5, .25*height)
}

function phys(){
  background(220)
  ratioCalc = logo.height/logo.width
  logo.width = 420
  logo.height = ratioCalc*420
  image(logo, width/2, height*.05)
  for (let i = 0; i<5; i++){
     ratioCalc = PQ[i].height/PQ[i].width
    PQ[i].width = 420
    PQ[i].height = ratioCalc*420

  }
  fill(255)
  rect(112,400,184,100,20,60,20,60)
  rect(308,400,184,100,20,60,20,60)
  rect(112,510,184,100,20,60,20,60)
  rect(308,510,184,100,20,60,20,60)
  rect(210,620,184,100,20,60,20,60)
  fill(0)
  textSize(75)
  text('A',112,430)
  text('B',308,430)
  text('C',112,540)
  text('D',308,540)
  text('E',210,650)
  image(PQ[psc], width*.5, .25*height)
}

function chem(){
  background(220)
  ratioCalc = logo.height/logo.width
  logo.width = 420
  logo.height = ratioCalc*420
  image(logo, width/2, height*.05)
  for (let i = 0; i<5; i++){
     ratioCalc = CQ[i].height/CQ[i].width
    CQ[i].width = 420
    CQ[i].height = ratioCalc*420

  }
  fill(255)
  rect(112,400,184,100,20,60,20,60)
  rect(308,400,184,100,20,60,20,60)
  rect(112,510,184,100,20,60,20,60)
  rect(308,510,184,100,20,60,20,60)
  rect(210,620,184,100,20,60,20,60)
  fill(0)
  textSize(75)
  text('A',112,430)
  text('B',308,430)
  text('C',112,540)
  text('D',308,540)
  text('E',210,650)
  image(CQ[csc], width*.5, .25*height)
}

function geo(){
  background(220)
  ratioCalc = logo.height/logo.width
  logo.width = 420
  logo.height = ratioCalc*420
  image(logo, width/2, height*.05)
  for (let i = 0; i<5; i++){
     ratioCalc = GQ[i].height/GQ[i].width
    GQ[i].width = 420
    GQ[i].height = ratioCalc*420

  }
  fill(255)
  rect(112,400,184,100,20,60,20,60)
  rect(308,400,184,100,20,60,20,60)
  rect(112,510,184,100,20,60,20,60)
  rect(308,510,184,100,20,60,20,60)
  rect(210,620,184,100,20,60,20,60)
  fill(0)
  textSize(75)
  text('A',112,430)
  text('B',308,430)
  text('C',112,540)
  text('D',308,540)
  text('E',210,650)
  image(GQ[gsc], width*.5, .25*height)
}

function astro(){
  background(220)
  ratioCalc = logo.height/logo.width
  logo.width = 420
  logo.height = ratioCalc*420
  image(logo, width/2, height*.05)
  for (let i = 0; i<5; i++){
     ratioCalc = AQ[i].height/AQ[i].width
    AQ[i].width = 420
    AQ[i].height = ratioCalc*420

  }
  fill(255)
  rect(112,400,184,100,20,60,20,60)
  rect(308,400,184,100,20,60,20,60)
  rect(112,510,184,100,20,60,20,60)
  rect(308,510,184,100,20,60,20,60)
  rect(210,620,184,100,20,60,20,60)
  fill(0)
  textSize(75)
  text('A',112,430)
  text('B',308,430)
  text('C',112,540)
  text('D',308,540)
  text('E',210,650)
  image(AQ[asc], width*.5, .25*height)
}
function instructions(){
  background(220)
  textSize(width/20)
  text('Instructions', width/2, height/10)
  textSize(width/22)
  textAlign(LEFT)
  text('Welcome to STEM Trainer! When you reach \nthe next screen, click on the topic you want to \npractice. After you have chosen your topic, \nyou will be presented with questions related \nto your topic of choice. If you get the question \ncorrect, you will be allowed to move onto the \nnext question. If you get a question wrong, \nyou can reattempt it. Once you have done \nall the questions in a subject, you may move \non to another subject. Happy Studying!',15,150)
  textAlign(CENTER)
  fill(255)
  rect(210, 600, 360, 80,20,60,20,60)
  fill(0)
  textSize(width/10)
  text('Click to Continue', width/2, height-35-45)
  ratioCalc = logo.height/logo.width
  logo.width = 420
  logo.height = ratioCalc*420
  image(logo, width/2, height*.65)
}
function correct(){
  correctness='Correct!'
}
function incorrect(){
  correctness='Incorrect.'
}

function drawStar(x, y, radius1, radius2, r, g, b) {
  let angle = TWO_PI / 5;
  fill(r, g, b);
  beginShape();
  noStroke()
  for (let a = -PI / 2; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + angle / 2) * radius1;
    sy = y + sin(a + angle / 2) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  fill(r, g, b);
}
function drawStarforCorrect(){

  if (screen == 'topic'){
    
    if(Mcompleted == true){
    drawStar(width*.15, 90, 10, 20, 212, 175, 55);
    }
    
    if(Bcompleted == true){
    drawStar(width*.15, 180, 10, 20, 212, 175, 55);
    }

    if (Pcompleted == true){
    drawStar(width*.15, 270, 10, 20, 212, 175, 55);
    }

    
    
    if(Ccompleted == true){
    drawStar(width*.15, 360, 10, 20, 212, 175, 55);
    }

    if(Gcompleted == true){
    drawStar(width*.15, 450, 10, 20, 212, 175, 55);
    }
    if (Acompleted == true){

      drawStar(width*.15, 540, 10, 20, 212, 175, 55);
    }
  

    
    
  }
  
}