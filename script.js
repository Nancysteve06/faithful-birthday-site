function makeWish() {
  const wish = document.getElementById("wishInput").value.trim();
  if (wish) {
    alert("🌟 Your wish has been sent to the stars, Fella says thanks! ✨\n\n" + wish);
    document.body.style.background = "#ffe6f9";
  } else {
    alert("Hey now, don’t forget to type your wish 💖");
  }
}
