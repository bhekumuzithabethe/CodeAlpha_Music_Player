let progress = document.getElementById('progress');
let song = document.getElementById('song');
let play = document.getElementById('play-icon');
let next = document.getElementById('next');
let back = document.getElementById('back');
let title = document.getElementById('song-title');
let song_cover = document.getElementById('audio-cover');

//song titles 
const songs = ['gucci','emabhukwini','emhlangeni'];

let songIndex = 0

loadSong(songs[songIndex]);

function loadSong(song){
    title.innerText = song;
    song.src = `music/${song}.mp3`;
    song_cover.src = `images/${song}.jpeg`;

}
function prevSong() {
    songIndex--;

    if(songIndex<0){
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playPause();
}


function nextSong() {
    songIndex++;

    if(songIndex>songs.length -1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playPause();
}



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

//Seeting the progress bar to the current minutes and seconds of the song
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}
//Playing and pausing the song
function playPause() {
    if(play.classList.contains('fa-pause')){
        song.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    }
    else{
        song.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }
}

