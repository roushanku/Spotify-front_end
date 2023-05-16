console.log("Welcome to spotify");

let songindex = 0;
let audioelement = new Audio('songs/1.mp3'); // song play
let masterplay = document.getElementById('masterplay');
let MyprogressBar = document.getElementById('MyprogressBar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songname: 'aashiqui aa gyi', filepath: 'songs/1.mp3', coverpath: 'cover/1.jpeg' },
    { songname: 'hamsafar song', filepath: 'songs/2.mp3', coverpath: 'cover/2.jpg' },
    { songname: 'pia piya song', filepath: 'songs/3.mp3', coverpath: 'cover/3.png' },
]

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

songitems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});

const playAll = (() => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
})
Array.from(document.getElementsByClassName("songitemplay")).forEach(() => {
    function f() {
        playAll();
        b.target.classList.remove("fa-play-circle");
        b.target.classList.add("fa-pause-circle");
    }
})