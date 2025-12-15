let score = localStorage.getItem("score") || 0;
document.getElementById("totalScore").innerText = score;

function addScore(){
  score = parseInt(score) + 10;
  localStorage.setItem("score", score);
  alert("🎉 ได้ 10 คะแนน!");
}
