// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUK666BeEwvQzeFW_lqx1oUWUiaBAf26Q",
    authDomain: "p5js-firebase-rip.firebaseapp.com",
    databaseURL: "https://p5js-firebase-rip-default-rtdb.firebaseio.com",
    projectId: "p5js-firebase-rip",
    storageBucket: "p5js-firebase-rip.appspot.com",
    messagingSenderId: "1068377010670",
    appId: "1:1068377010670:web:89f5319d23dd55ccc29eff",
    measurementId: "G-W5MP985XXQ"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
  function writeUserData(userId,value) {
    database.ref(userId).set({
      data1: value,
    });
  }

  function updateUserData(val) {
    var updates = {};

    if (typeof(val) == "boolean") {
      var postData = {
        val
      };
      updates['/test/data1' ] = postData;
    }
    else if (typeof(val) == "number"){
      var postData = {
        val
      };
      updates['/test/data2'] = postData;
    }

    

  
    return firebase.database().ref().update(updates);
  }

  
  var val = true;
  var val2 = 6;
  let c1, c2;
  var rectW, rectH;
  var barY, iconSize, startX, startY, likeButX, likeButY, sendButX, navIconY;

  function setup() {
    
    button = createButton('click me');
    button.position(windowWidth/2, windowHeight/2);
    initCircle();
    img = loadImage('assets/001.png');
    like = loadImage('assets/like.png');
    heart = loadImage('assets/heart.png');
    post = loadImage('assets/post.png');
    search = loadImage('assets/search.png');
    home = loadImage('assets/home.png');
    send = loadImage('assets/send.png');
    comment = loadImage('assets/comment.png');
    
    c1 = color(147, 28, 173);
    c2 = color(255, 102, 0);

    if (windowWidth <= 1200){
      rectW = Math.floor(windowWidth*0.8);
      rectH = rectW * 2;
    }
    else{
      rectW = 500;
      rectH = 1000;
    }
    
    barY = Math.floor(rectH * 0.06);
    iconSize = Math.floor(barY * 0.6);

    startX = windowWidth/2 - rectW/2;
    startY = windowHeight/2 - rectH/2;
    
    if (rectH > windowHeight){
      createCanvas(windowWidth, rectH);
    }
    else {
      createCanvas(windowWidth, windowHeight);
    }
    
    likeButX = startX + Math.floor(rectW * 0.05);
    likeButY = startY + barY *1.2 + rectW;
    sendButX = startX + Math.floor(rectW * 0.05) + barY*0.9*2;
    navIconY = startY - barY *0.8 + rectH;
    textSize(30);
    console.log(rectW, rectH, barY);
  }

  function initCircle() {
    circleX = windowWidth/3;
    circleY = windowHeight/3;
    circleRad = 100;
  }
  
  function draw(){
    for(let y=0; y<height; y++){
      n = map(y,0,height,0,1);
      let newc = lerpColor(c1,c2,n);
      stroke(newc);
      line(0,y,windowWidth, y);
    }
    
    fill(255);
    rect(startX, startY, rectW, rectH);
    button.mousePressed(change);
    //text(val,windowWidth/2, windowHeight/2-30);
    fill(148, 255, 235);
    noStroke();
    ellipse(circleX, circleY, 100);
    fill(0, 0, 0);

    image(img, startX, startY + barY, rectW, rectW);
    image(heart, likeButX, startY + barY *0.2, iconSize, iconSize);
    text("ThisIsReco",startX + Math.floor(rectW * 0.09) + iconSize, startY + iconSize);


    //fill(148, 255, 235);
    //rect(startX, startY + barY + rectW, rectW, barY); // the like bar
    //rect(startX, startY + rectH - barY, rectW, barY); // navigation bar
    //fill(0, 0, 0);

    // like bar icons
    image(like, likeButX, likeButY, iconSize, iconSize);
    image(comment, startX + Math.floor(rectW * 0.05) + barY*0.9, likeButY, iconSize, iconSize);
    image(send, sendButX, likeButY, iconSize, iconSize);

    // navigation bar icons
    image(home, startX + Math.floor(rectW * 0.10), navIconY, iconSize, iconSize);
    image(search, startX + Math.floor(rectW * 0.35), navIconY, iconSize, iconSize);
    image(post, startX + Math.floor(rectW * 0.6), navIconY, iconSize, iconSize);
    image(heart, startX + Math.floor(rectW * 0.84), navIconY, iconSize, iconSize);

    
    text("ThisIsReco",likeButX, likeButY+barY*1.2);
    text("wdfkniwevnidsubvidfunjyejgdsretjriuvn",likeButX, likeButY+barY*1.7);

  }
  
  function change() {
    if (val) val = false;
    else val = true;
    updateUserData(val);
    console.log(val);
  }



  function getRandomInt(min, max) {
      return Math.floor(Math.random() * max) + min;
  }

  function mouseClicked(){
    //if (dist(mouseX, mouseY, circleX, circleY) < 100){
      //change();
    //}
    if (dist(mouseX, mouseY, likeButX + iconSize/2, likeButY + iconSize/2) < iconSize / 2){
      change();
    }
  }

  function mouseDragged(event) {
    console.log(event);
  }
