let progress = document.getElementById('progress');
let song = document.getElementById('song');
let play = document.getElementById('play-icon');
let next = document.getElementById('next');
let back = document.getElementById('back');
let title = document.getElementById('song-title');

progress.onchange = function(){
    song.play;
    song.currentTime = progress.value;
    play.classList.remove('fa-play');
        play.classList.add('fa-pause')
}

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

function playPause() {
    if(play.classList.contains('fa-pause')){
        song.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play')
    }
    else{
        song.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause')
    }
}

function prevSong(params) {
    
}



//song titles 
const songs = ['gucci','umfana wezinkomo'];

let songIndex = 0

loadSong(songs[sonIndex]);

function loadSong(song){
    title.innerText = song;
    audio = `media/${song}.mp3`
    audio = `media/${song}.jpeg`

}
function prevSong() {
    songIndex++;

    if(songIndex>songs.length -1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playPause();
}


function nextSong() {
    songIndex--;

    if(songIndex<0){
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playPause();
}


next.addEventListener('click', nextSong);
back.addEventListener('click', prevSong);