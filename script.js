const emoji = []
const hex = 127928

// creates html estructure to add emojis
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

// loop to sum 1 at the hex code
for (let i = 1; i < 50; i++){
    emoji.push(`
    <div class="container">
    <div id="emoji">
    <p>&#${hex+i};</p>
    </div>
    <div id="hex">
        <p>${hex+i}</p>
    </div>
    </div>
    `)
}

// output the emojis
const $icon = document.getElementById("flexbox");
$icon.innerHTML = emoji.join('')


{/* <div class="container">
<div id="emoji">
    <p>&#129409</p>
</div>
<div id="hex">
    <p>129409</p>
</div>
</div> */}