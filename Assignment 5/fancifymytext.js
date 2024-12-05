// Displays alert when "Bigger!" button is clicked
function sendAlert() {
  alert("Hello, world!");
  makeTextBig();
}
// Makes text in box bigger when the "Bigger!" button is clicked
function makeTextBig() {
  document.getElementById("myTextArea").style.fontSize = "24pt";
}
// Makes text blue and underlined 
function fancifyOption() {
  const textArea = document.getElementById("myTextArea");
  textArea.style.color = "blue";
  textArea.style.fontWeight = "bold";
  textArea.style.textDecoration = "underline";
}
// Reverts text back to normal
function boringOption() {
  const textArea = document.getElementById("myTextArea");
  textArea.style.color = "black";
  textArea.style.fontWeight = "normal";
  textArea.style.textDecoration = "none";
}
// Adds "Moo" to the end of every sentence
function moo() {
  const textArea = document.getElementById("myTextArea");
  let text = textArea.value.toUpperCase();
  const sentences = text.split(/([.!?]+)/);

  for (let i = 0; i < sentences.length; i += 2) {
    if (sentences[i].trim()) {
      sentences[i] = sentences[i].trim() + "-Moo";
    }
  }
  textArea.value = sentences.join("");
}
