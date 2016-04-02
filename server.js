"use strict";

var sumo = require('node-sumo');
var keypress = require('keypress');

var drone = sumo.createClient();

drone.connect(function() {
	console.log("Welcome to JS Drone Control!");
  console.log("Use your arrow keys to drive and J to jump and S to shake!");
});

drone.on("battery", function(battery) {
  console.log("Battery: " + battery);
});

keypress(process.stdin);

process.stdin.on('keypress', function (ch, key) {
  if (key && key.name=='up') {
  	drone.forward(50);
  }
  else if(key && key.name=='down') 
  {
  	drone.backward(50);
  }
  else if(key && key.name=='left') 
  {
  	drone.left(50);
  }
  else if(key && key.name=='right') 
  {
  	drone.right(50);
  }
  else if(key && key.name=='s')
  {
  	drone.animationsSlowShake();
  }
  else if(key && key.name=='j')
  {
    drone.animationsHighJump();
  }
  else if(key && key.name=='escape')
  {
    process.exit();
  }
  else
  {
  	drone.stop();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();