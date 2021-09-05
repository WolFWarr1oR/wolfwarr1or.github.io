var canvas = document.getElementById('menu-highlight');
var ctx = canvas.getContext('2d');
var start = new Date().getTime() - 5000;
var gradients = [-1];
var offsetTop = -100;
var isHighlightActive = false;
var theme = new Audio('https://cdn.discordapp.com/attachments/303406782104207362/315769344972029952/main.ogg');
theme.volume = 0.1;

theme.play();

var Particle = function() {
  this.radius = (Math.random() * 1) + 0.5;
  this.top = (Math.random() * 20) - 20;
  this.left = Math.random() * 100;
  this.speed = 1 / this.radius;
  this.opacity = 1;
  this.disintegrateRate = (Math.random() * 0.005) + 0.001;
}

var particles = [];

for(var i = 0; i < 10; i++) {
  particles.push(new Particle());
}

function drawHiglight() {
  /* rect */
  var currentTime = new Date().getTime();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  var grH = ctx.createLinearGradient(0, 0, 600, 0);
  
  if (currentTime - start > 5000 && gradients[0] < 0.1) {
    start = new Date().getTime();
    gradients = [1,1,0.9,0.7,0.6,0.5,0.5,0.4,0.3,0];  
  }
  
  for(var i = 0; i < gradients.length; i++) {
    grH.addColorStop('0.' + i, 'rgba(255,255,255,' + gradients[i] + ')');

    if (gradients[i] > 0.1) {
      gradients[i] -= 0.01;
    }
  }

  ctx.fillStyle = grH;
  ctx.fillRect(0, offsetTop, 600, 10);
  /* end of rect */
  
  /* particles */
  for(var i = 0; i < particles.length; i++) {
    ctx.beginPath();
    ctx.arc(particles[i].left, offsetTop + 15 + particles[i].top, particles[i].radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,255,255,' + particles[i].opacity + ')';
    ctx.fill();
    
    particles[i].left += particles[i].speed;
    particles[i].opacity -= particles[i].disintegrateRate;
    
    if (particles[i].opacity < 0 || particles[i].left > 700) {
      particles[i] = new Particle();
    }
  }
  /* end of particles */
  
  if (isHighlightActive === true) {
    requestAnimationFrame(drawHiglight);  
  }
}


function highlight(element, event) {
  event.stopImmediatePropagation();
  offsetTop = element.offsetTop + 25;
  start = new Date().getTime();
  gradients = [1,1,0.9,0.7,0.6,0.5,0.5,0.4,0.3,0];
  
  if (isHighlightActive === false) {
    isHighlightActive = true;
    requestAnimationFrame(drawHiglight);
  }
}

document.getElementById('main').onmouseover = function() {
  if (offsetTop !== -100) offsetTop = -100;
  isHighlightActive = false;
}

var isChatActive = false;
var chatInput = document.getElementById('text');
var chatLog = document.getElementById('chat-log');

document.body.onkeydown = function(event){
  if (event.keyCode === 13 && isChatActive === false) {
    isChatActive = true;
    document.getElementById('enter').style.display = 'none';
    document.getElementById('chat-log').classList.add('active');
    document.getElementById('chat-input').classList.add('active');
    chatInput.focus();
  } else if (event.keyCode === 13 && isChatActive === true) {
    if (chatInput.value === 'no u') {
      var message = document.createElement('div');
      message.innerHTML = '[SureFourteen]: ' + chatInput.value;
      chatLog.prepend(message);
      var message = document.createElement('div');
      message.style.color = 'rgb(255, 66, 66)';
      message.innerHTML = '[Genji]: Understandable, have a nice day';
      chatLog.prepend(message);
    } else if (chatInput.value !== '') {
      var message = document.createElement('div');
      message.innerHTML = '[SureFourteen]: ' + chatInput.value;
      chatLog.prepend(message);
    }

    isChatActive = false;
    chatInput.value = '';
    document.getElementById('enter').style.display = 'flex';
    chatLog.classList.remove('active');
    document.getElementById('chat-input').classList.remove('active');
  }
}

document.body.focus();