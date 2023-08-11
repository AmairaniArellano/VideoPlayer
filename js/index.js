const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('click play')
}

function handlePause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('click pause')
}

$backward.addEventListener('click', handleBackward)

function handleBackward() {
    $video.currentTime -= 10
    console.log('click -10', $video.currentTime)
}

$forward.addEventListener('click', handleForward)

function handleForward() {
    $video.currentTime += 10
    console.log('click +10', $video.currentTime)
}