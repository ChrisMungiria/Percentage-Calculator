const percent = document.getElementById("percentage");
const number = document.getElementById("no");
function calculate() {
  const answer = (percent.value / 100) * number.value;
  document.getElementById("result").innerHTML = answer;
}
