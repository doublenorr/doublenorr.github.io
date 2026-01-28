function startExperience() {
    document.getElementById('profile-layer').scrollIntoView({ behavior: 'smooth' });
    const music = document.getElementById("bgMusic");
    music.play();
    document.getElementById("musicStatus").innerHTML = "🌸 Pause Music";
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const status = document.getElementById("musicStatus");
    if (music.paused) {
        music.play();
        status.innerHTML = "🌸 Pause Music";
    } else {
        music.pause();
        status.innerHTML = "🎀 Play Music";
    }
}
const nameText = "Welcome to My Space"; 
const speed = 100; 
let i = 0;

function typeWriter() {
    if (i < nameText.length) {
        document.getElementById("typing-name").innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;