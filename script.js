console.log("Welcome to spotify");

let songindex = 0;
let audioelement = new Audio('1.mp3'); // song play
let masterplay = document.getElementById('masterplay');
let MyprogressBar = document.getElementById('MyprogressBar');

let songs = [
    { songname: 'mere ram', filepath: 'song/1.mp3', coverpath: 'covers/2.mp3' },
    { songname: 'mere ram', filepath: 'song/1.mp3', coverpath: 'covers/2.mp3' },
    { songname: 'mere ram', filepath: 'song/1.mp3', coverpath: 'covers/2.mp3' },
    { songname: 'mere ram', filepath: 'song/1.mp3', coverpath: 'covers/2.mp3' },
]

function myfunction() {

    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        console.log(masterplay.classList);
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
}

MyprogressBar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    MyprogressBar.value = progress;

})

//js code to make nav bar
let nav = document.getElementById('nav');
let toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
}
)
//next song
let next = document.getElementById('next');
next.addEventListener('click', () => {
    songindex = (songindex + 1) % songs.length;
    loadSong(songindex);
    audioelement.play();
})

//graph song
let previous = document.getElementById('previous');
previous.addEventListener('click', () => {

    songindex = (songindex - 1 + songs.length) % songs.length;
    loadSong(songindex);
    audioelement.play();
})
