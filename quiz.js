function checkQuiz(){
  const radios = document.querySelectorAll("input[name='q']");
  let gained = 0;
  radios.forEach(r => {
    if(r.checked){
      gained = parseInt(r.value);
    }
  });

  if(gained > 0){
    let score = parseInt(localStorage.getItem("score") || 0);
    score += gained;
    localStorage.setItem("score", score);
    alert("✅ ถูกต้อง ได้ " + gained + " คะแนน");
  }else{
    alert("❌ ยังไม่ถูก");
  }
}
