// Emoji Map
let emojiMap = {
  a:"😀", b:"😁", c:"😂", d:"😃", e:"😄", f:"😅", g:"😆",
  h:"😉", i:"😊", j:"😋", k:"😎", l:"😍", m:"😘",
  n:"😗", o:"😙", p:"😚", q:"🙂", r:"🤗",
  s:"🤩", t:"🤔", u:"🤨", v:"😐", w:"😑",
  x:"😶", y:"🙄", z:"😏", " ":"❄"
};

let currentEmoji = "";
let currentPassword = "";
let currentText = "";

// Encode Function
function encode() {

  let text = document.getElementById("textInput").value.toLowerCase();
  if (!text) return;

  currentText = text;
  let emojiText = "";

  for (let i = 0; i < text.length; i++) {
    emojiText += emojiMap[text[i]] || "";
  }

  currentEmoji = emojiText;
  currentPassword = Math.floor(1000 + Math.random() * 9000);

  document.getElementById("emojiOutput").innerText = currentEmoji;
  document.getElementById("passwordOutput").innerText = currentPassword;
}

// Decode Function
function decode() {

  let emojiInput = document.getElementById("emojiInput").value;
  let passwordInput = document.getElementById("passwordInput").value;

  if (emojiInput === currentEmoji && passwordInput == currentPassword) {
    document.getElementById("textOutput").innerText = currentText;
  } else {
    document.getElementById("textOutput").innerText = "Wrong Password or Emoji!";
  }
}

// Copy Emoji (Click Box)
function copyEmoji() {

  if (!currentEmoji) return;

  navigator.clipboard.writeText(currentEmoji);

  let box = document.getElementById("emojiOutput");
  box.innerText = "Copied ✅";
  box.style.border = "2px solid green";

  setTimeout(() => {
    box.innerText = currentEmoji;
    box.style.border = "2px dashed #3333ff";
  }, 1500);
}
