console.log("Welcome to spotify");

//intialize the variable
let songindex = 0;
let audioelement = new Audio('1.mp3'); // song play
let masterplay = document.getElementById('masterplay');
let MyprogressBar = document.getElementById('MyprogressBar'); 

let songs = [
    {songname: 'mere ram', filepath:'song/1.mp3', coverpath:'covers/2.mp3'},
    {songname: 'mere ram', filepath:'song/1.mp3', coverpath:'covers/2.mp3'},
    {songname: 'mere ram', filepath:'song/1.mp3', coverpath:'covers/2.mp3'},
    {songname: 'mere ram', filepath:'song/1.mp3', coverpath:'covers/2.mp3'},
]
//handle play pause click
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){ 
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    else{
        audioelement.play();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle'); 
    }
})
//listen to events
MyprogressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
})

