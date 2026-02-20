// Full Emoji Map
let emojiMap = {

  // Letters
  a:"😀", b:"😁", c:"😂", d:"😃", e:"😄", f:"😅", g:"😆",
  h:"😉", i:"😊", j:"😋", k:"😎", l:"😍", m:"😘",
  n:"😗", o:"😙", p:"😚", q:"🙂", r:"🤗",
  s:"🤩", t:"🤔", u:"🤨", v:"😐", w:"😑",
  x:"😶", y:"🙄", z:"😏",

  // Space
  " ":"❄",

  // Numbers
  0:"🍎", 1:"🍊", 2:"🍋", 3:"🍌", 4:"🍉",
  5:"🍇", 6:"🍓", 7:"🍒", 8:"🥝", 9:"🥑",

  // Special Characters
  "!":"⚡", "@":"🔥", "#":"🌟", "$":"💰",
  "%":"🎯", "^":"🚀", "&":"🎵", "*":"🎲",
  "(":"🌀", ")":"🌈", "-":"➖", "_":"➕",
  "=":"💎", "+":"🔷", "?":"❓", "/":"✂",
  ".":"🔵", ",":"🟣", ":":"🟡", ";":"🟠",
  "'":"🔴", "\"":"⚪", "[":"⬛", "]":"⬜",
  "{":"🟫", "}":"🟩"
};

// Reverse Map
let reverseMap = {};
for (let key in emojiMap) {
  reverseMap[emojiMap[key]] = key;
}

// Encode
function encode() {

  let text = document.getElementById("textInput").value
              .trim()
              .toLowerCase();

  if (!text) return;

  let emojiArray = [];

  for (let i = 0; i < text.length; i++) {
    if (!emojiMap[text[i]]) {
      alert("Unsupported character: " + text[i]);
      return;
    }
    emojiArray.push(emojiMap[text[i]]);
  }

  let emojiText = emojiArray.join(" "); // space separated

  // Password calculation
  let pass = 0;
  for (let i = 0; i < text.length; i++) {
    pass += text.charCodeAt(i);
  }

  let finalPassword = pass.toString().slice(0,4);

  document.getElementById("emojiOutput").innerText = emojiText;
  document.getElementById("passwordOutput").innerText = finalPassword;
}

// Decode
function decode() {

  let emojiInput = document.getElementById("emojiInput").value.trim();
  let passwordInput = document.getElementById("passwordInput").value;

  let emojiArray = emojiInput.split(" ");
  let decodedText = "";

  for (let emoji of emojiArray) {
    if (!reverseMap[emoji]) {
      document.getElementById("textOutput").innerText = "Invalid Emoji!";
      return;
    }
    decodedText += reverseMap[emoji];
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

// Copy
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
