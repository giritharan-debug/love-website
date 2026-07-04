// Check Password
function checkPassword() {

    let password = document.getElementById("password").value;

    if (password === "1219") {

    document.getElementById("bgMusic").play();

    // Your existing code here...

        // Hide Password Screen
        document.getElementById("password-screen").style.display = "none";

        // Show Welcome Screen
        document.getElementById("welcome-screen").style.display = "flex";

        // After 3 seconds
        setTimeout(function () {

            document.getElementById("welcome-screen").style.display = "none";

            document.getElementById("website").style.display = "block";

        }, 3000);

    }

    else {

        alert("❌ Wrong Password");

    }
}


// Change Tabs
function openTab(tabName) {

    // Hide all contents
    let contents = document.getElementsByClassName("content");

    for (let i = 0; i < contents.length; i++) {

        contents[i].style.display = "none";

        contents[i].classList.remove("active");

    }

    // Show selected tab
    document.getElementById(tabName).style.display = "block";

    document.getElementById(tabName).classList.add("active");

}
function toggleLetter(){

let letter=document.getElementById("letterText");

if(letter.style.display==="block"){

letter.style.display="none";

}

else{

letter.style.display="block";

}

}
function toggleMusic() {

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    if (music.paused) {
        music.play();
        button.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        button.innerHTML = "🎵 Play Music";
    }

}
setInterval(createHeart,400);

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="rain-heart";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}
function showImage(src){

document.getElementById("preview").style.display="flex";

document.getElementById("previewImg").src=src;

}

document.getElementById("preview").onclick=function(){

this.style.display="none";

}
function sayYes(){

    document.getElementById("answer").innerHTML =
    "🥹❤️ You just made me the happiest person! ❤️🥹";

}

function moveNo(){

    const no = document.getElementById("noBtn");

    no.style.left = Math.random()*300 + "px";
    no.style.top = Math.random()*150 + "px";

}