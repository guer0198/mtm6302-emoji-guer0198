// const hex = document.getElementById("hex");
// const $hexText = hex.firstElementChild;
// $hexText.textContent = 127915

// const emoji = document.getElementById("emoji");
// const $emojiNumber = emoji.firstElementChild;
// $emojiNumber.textContent = "&#127916;"
const emoji = []
const hex = [127928]

emoji.push(`
<div class="container">
<div id="emoji">
<p>&#${hex};</p>
</div>
<div id="hex">
    <p>${hex}</p>
</div>
</div>
`)

for (let i = 0; i < 50; i++){
    emoji.push()
}

const $icon = document.getElementById("flexbox");
$icon.innerHTML = emoji.join('')

// const $hex = document.getElementById("flexbox");
// $hex.innerHTML = hex.join('')


{/* <div class="container">
<div id="emoji">
    <p>&#129409</p>
</div>
<div id="hex">
    <p>129409</p>
</div>
</div> */}