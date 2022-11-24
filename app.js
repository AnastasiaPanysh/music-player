const play = document.querySelector('.play')

const arr = [{
        // src:'C:\\Users\\Tigra\\Desktop\\music-player\\2.mp3'
        src: './1.mp3'
    },
    {
        // src:'C:\\Users\\Tigra\\Desktop\\music-player\\1.mp3'
        src: './2.mp3'
    },
    {
        // src:'C:\\Users\\Tigra\\Desktop\\music-player\\1.mp3'
        src: './3.mp3'
    }
];
let indCurrentSong = 0

const audioTag = document.createElement('audio')
let flag = false;
play.addEventListener('click', () => {
    currentSong()
})

document.querySelector('.right').addEventListener('click', () => {
    if (indexCurrentSong === arr.length - 1) {
        indexCurrentSong = 0;
    } else {
        indexCurrentSong++;
    }
    changeSong();
});


document.querySelector('.left').addEventListener('click', () => {
    if (indCurrentSong === 0) {
        indCurrentSong = arr.length - 1
    } else {
        indCurrentSong--
    }
    changeSong()
})

function currentSong() {
    audioTag.src = arr[indCurrentSong].src
    if (flag === false) {
        play.textContent = 'выкл'
        audioTag.play()
        flag = true
    } else {
        play.textContent = 'вкл'
        audioTag.pause()
        flag = false
    }
}

function changeSong() {
    audioTag.src = arr[indCurrentSong].src
    audioTag.play()
}