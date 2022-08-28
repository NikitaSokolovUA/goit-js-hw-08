import Player from '@vimeo/player';
import throttle from '../../node_modules/lodash/throttle';



// const player = new Vimeo.Player(vimeoPlayer)
const player = new Player("vimeo-player")


player.on('timeupdate', throttle((e) => {
    setTimeUpdateToLocalStorage(e)
    console.log(e)
}, 1000)
)

const stopped = getimeUpdateToLocalStorage()   

player.setCurrentTime(stopped).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

function setTimeUpdateToLocalStorage(settings) {
    localStorage.setItem('settings', JSON.stringify(settings))
    
}

function getimeUpdateToLocalStorage() {
    const playerSettings = localStorage.getItem('settings')
    const parsedPlayerSettings = JSON.parse(playerSettings)
    
    return parsedPlayerSettings.seconds
}