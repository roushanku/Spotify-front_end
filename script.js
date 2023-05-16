console.log("Welcome to spotify");

let songindex = 0;
let audioelement = new Audio('songs/1.mp3'); // song play
let masterplay = document.getElementById('masterplay');
let MyprogressBar = document.getElementById('MyprogressBar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songtext = document.getElementById('songtext');

let songs = [
    { songname: 'aashiqui aa gyi', filepath: 'songs/1.mp3', coverpath: 'cover/1.jpeg' },
    { songname: 'hamsafar song', filepath: 'songs/2.mp3', coverpath: 'cover/2.jpg' },
    { songname: 'pia piya song', filepath: 'songs/3.mp3', coverpath: 'cover/3.png' },
]

// audioelement.play();

let index = 0;
function myfunction() {

    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
}

audioelement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    console.log(progress);
    MyprogressBar.value = progress;
})

MyprogressBar.addEventListener('change', () => {
    audioelement.currentTime = (MyprogressBar.value * audioelement.duration) / 100;
})

function update_song(x) {
    console.log(x);
    if (x == index)
        return;
    audioelement.pause();
    audioelement = new Audio(`songs/${x + 1}.mp3`);
    audioelement.play();
    index = x;
    masterplay.classList.add('fa-pause-circle');
    masterplay.classList.remove('fa-play-circle');
    MyprogressBar.value = 0;
    songtext.innerText = songs[x].songname;
    gif.style.opacity = 1;
}

// generate function to run key press
addEventListener('keydown', (e) => {
    console.log(e);
    if (e.key == " ") {
        myfunction();
    }
    if (e.key == "ArrowRight" && audioelement.currentTime > 0 && audioelement.currentTime < audioelement.duration - 5) {
        console.log("Skiped 5 sec");
        audioelement.currentTime += 5;
        MyprogressBar.value = MyprogressBar.value + 5;
    }
    if (e.key == "ArrowLeft" && audioelement.currentTime > 5) {
        console.log("Back 5 sec");
        audioelement.currentTime -= 5;
        MyprogressBar.value = MyprogressBar.value - 5;
    }
    if (e.key == "ArrowDown") {
        console.log("Next song");
        update_song((index + 1) % songs.length);
    }
    if (e.key == "ArrowUp") {
        console.log("Next song");
        if (index == 0)
            index = songs.length;
        update_song((index - 1) % songs.length);
    }
    timeline();
})

function timeline() {
    let currenttime = document.getElementById('currenttime');
    let duration = document.getElementById('duration');
    currenttime.innerText = convert(Math.floor(audioelement.currentTime)) + " /";
    duration.innerText = convert(Math.floor(audioelement.duration));
    console.log("timeline running");
}

// function to run each second
setInterval(() => {
    timeline();
    console.log("Setinterval running");
}, 1000);

function convert(x) {
    let min = Math.floor(x / 60);
    let sec = x % 60;
    if (sec < 10)
        return `${min}:0${sec}`;
    else
        return `${min}:${sec}`;
}