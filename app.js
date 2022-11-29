const play = document.querySelector('.play-stop'),
    like = document.querySelector('.like'),
    repeat = document.querySelector('.repeat-btn'),
    title = document.getElementById('title'),
    singer = document.getElementById('singer'),
    image = document.querySelector('.img'),
    line = document.querySelector('.line'),
    time = document.querySelector('.time'),

    arr = [{
            title: 'Seasons Change',
            singer: 'Quasimoto',
            src: './audio/quasimoto.mp3',
            image: './img/quasimoto.svg',
            likeFlag: false
        },
        {
            title: 'Mosquito Song',
            singer: 'Queens Of The Stone Age',
            src: './audio/mosquito.mp3',
            image: './img/mosquito.svg',
            likeFlag: false
        },
        {
            title: 'Unstoppable',
            singer: 'Sia',
            src: './audio/sia.mp3',
            image: './img/sia.svg',
            likeFlag: false
        }
    ];


let indexCurrentSong = 0,
    repeatFlag = false,
    likeFlag = false,
    flag = false;

const audioTag = document.createElement('audio');

image.src = arr[indexCurrentSong].image;
title.innerHTML = arr[indexCurrentSong].title;
singer.innerHTML = arr[indexCurrentSong].author;

play.addEventListener('click', () => {
    currentSong()
})

document.querySelector('.forward').addEventListener('click', () => {
    if (indexCurrentSong === arr.length - 1) {
        indexCurrentSong = 0;
    } else {
        indexCurrentSong++;
    }
    changeSong();
});


document.querySelector('.back').addEventListener('click', () => {
    if (indexCurrentSong === 0) {
        indexCurrentSong = arr.length - 1
    } else {
        indexCurrentSong--
    }
    changeSong()
})

function currentSong() {
    audioTag.src = arr[indexCurrentSong].src
    if (flag === false) {
        play.style = 'background-image: url(./img/pause.svg)';
        audioTag.play()
        flag = true
    } else {
        play.style = 'background-image: url(./img/playBtn.svg)';
        audioTag.pause()
        flag = false
    }
}


function changeSong() {
    audioTag.src = arr[indexCurrentSong].src
    image.style = ` background-image: url(${arr[indexCurrentSong].image})`;
    title.innerHTML = arr[indexCurrentSong].title;
    singer.innerHTML = arr[indexCurrentSong].singer;
    audioTag.play()
    playFlag = true;
}

audioTag.addEventListener('timeupdate', (event) => {
 

    
});