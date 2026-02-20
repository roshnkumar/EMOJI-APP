// Emoji Map
let emojiMap = {
  a:"😀", b:"😁", c:"😂", d:"😃", e:"😄", f:"😅", g:"😆",
  h:"😉", i:"😊", j:"😋", k:"😎", l:"😍", m:"😘",
  n:"😗", o:"😙", p:"😚", q:"🙂", r:"🤗",
  s:"🤩", t:"🤔", u:"🤨", v:"😐", w:"😑",
  x:"😶", y:"🙄", z:"😏", " ":"❄"
};

// Reverse Map (Emoji → Letter)
let reverseMap = {};
for (let key in emojiMap) {
  reverseMap[emojiMap[key]] = key;
}

// Encode Function
function encode() {

  let text = document.getElementById("textInput").value
              .trim()
              .toLowerCase();

  if (!text) return;

  let emojiText = "";

  for (let i = 0; i < text.length; i++) {
    emojiText += emojiMap[text[i]] || "";
  }

  // Deterministic Password (Same text → Same password)
  let pass = 0;
  for (let i = 0; i < text.length; i++) {
    pass += text.charCodeAt(i);
  }

  let finalPassword = pass.toString().slice(0,4);

  document.getElementById("emojiOutput").innerText = emojiText;
  document.getElementById("passwordOutput").innerText = finalPassword;
}

// Decode Function
function decode() {

  let emojiInput = document.getElementById("emojiInput").value;
  let passwordInput = document.getElementById("passwordInput").value;

  let decodedText = "";

  // Emoji decode (each emoji is 2 characters long)
  for (let i = 0; i < emojiInput.length; i+=2) {
    let emojiChar = emojiInput.slice(i, i+2);
    decodedText += reverseMap[emojiChar] || "";
  }

  // Recalculate password
  let pass = 0;
  for (let i = 0; i < decodedText.length; i++) {
    pass += decodedText.charCodeAt(i);
  }

  let correctPassword = pass.toString().slice(0,4);

  if (passwordInput == correctPassword) {
    document.getElementById("textOutput").innerText = decodedText;
  } else {
    document.getElementById("textOutput").innerText = "Wrong Password!";
  }
}

// Copy Emoji
function copyEmoji() {

  let emojiText = document.getElementById("emojiOutput").innerText;
  if (!emojiText) return;

  navigator.clipboard.writeText(emojiText);

  let box = document.getElementById("emojiOutput");
  box.innerText = "Copied ✅";
  box.style.border = "2px solid green";

  setTimeout(() => {
    box.innerText = emojiText;
    box.style.border = "2px dashed #3333ff";
  }, 1500);
}
