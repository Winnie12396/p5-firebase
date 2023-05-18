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

  function writeNewPost(userId, val) {
    const db = getDatabase();

    // A post entry.
    const postData = {
        data1: val
    };

    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), 'posts')).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return update(ref(db), updates);
  }
  
  var val = true;
  function setup() {
    createCanvas(windowWidth, windowHeight);
    button = createButton('click me');
    button.position(windowWidth/2, windowHeight/2);
  }
  
  function draw(){
    background(255);
    button.mousePressed(change);
    text(val,windowWidth/2, windowHeight/2-30);
  }
  
  function change() {
    if (val)val = false;
    else val = true;
    //writeUserData('/', val);
    writeNewPost("/", val);
  }
