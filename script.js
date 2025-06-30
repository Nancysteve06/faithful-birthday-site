function makeWish(){
  const wish = document.getElementById('wishInput').value.trim();
  if(wish){
    alert("🌟 Your wish reached the stars, Fella says thanks! ✨\n" + wish);
    explodeFairyDust();
  } else {
    alert("Please type your magical wish 💖");
  }
}

function explodeFairyDust(){
  const d = document.createElement('div');
  d.classList.add('fairy-explode');
  document.querySelector('.card').appendChild(d);
  setTimeout(()=>d.remove(),2000);
}

// Fairy dust explosion
const style = document.createElement('style');
style.innerHTML = `
.fairy-explode {
  position:absolute; top:50%; left:50%;
  width:200px; height:200px;
  background: url('https://i.imgur.com/OJfS0vX.png') no-repeat;
  background-size:contain;
  animation: popDust 1s ease-out;
}
@keyframes popDust {
  0% { transform: translate(-50%,-50%) scale(0); opacity:1 }
  100% { transform: translate(-50%,-50%) scale(1.5); opacity:0 }
}`;
document.head.appendChild(style);
