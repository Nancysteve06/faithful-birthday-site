function makeWish(){
  const wish = document.getElementById('wishInput').value.trim();
  if(wish){
    alert("🌟 Your wish reached the stars, Fella says thanks! ✨\n" + wish);
  } else {
    alert("Please type your magical wish 💖");
  }
}
