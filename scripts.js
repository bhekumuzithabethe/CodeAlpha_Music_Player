let progress = document.getElementById('progress');
let song = document.getElementById('song');
let play = document.getElementById('play-icon');
let next = document.getElementById('next');
let back = document.getElementById('back');
let title = document.getElementById('song-title');
let song_cover = document.getElementById('audio-cover');
let artist = document.getElementById('artist');

// Song titles
const songs = ["Gucci (feat MaWhoo)", "Emabhukwini Amafa", "ZING'SHIYIL' EZIY' EMHLANGENI"];
const artitsts = ["Mthandeni SK", "Saliwa", "Saliwa"];

let songIndex = 0;

loadSong(songs[songIndex],artitsts[songIndex]);

function loadSong(songName,songArtist) {
    title.innerText = songName;
    artist.innerText = songArtist;
    song.src = `music/${songName}.mp3`;
    song_cover.src = `images/${songName}.jpeg`;
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex],artitsts[songIndex]);

    playPause();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex],artitsts[songIndex]);
    playPause();

}

progress.onchange = function () {
    song.currentTime = progress.value;
    song.play();
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
}

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// Updating progress bar every 500ms
song.ontimeupdate = function () {
    progress.value = song.currentTime;
}

// Playing and pausing the song
function playPause() {
    if (play.classList.contains('fa-pause')) {
        song.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    } else {
        song.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }
}

// Event listeners for next and previous buttons
next.addEventListener('click', nextSong);
back.addEventListener('click', prevSong);
play.addEventListener('click', playPause);
song.addEventListener('ended', nextSong());