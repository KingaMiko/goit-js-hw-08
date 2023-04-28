import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const updateTimeInLocalStorageThrottled = throttle(e => {
  //console.log(e.seconds);
  try {
    localStorage.setItem('videoplayer-current-time', `${e.seconds}`);
  } catch (e) {
    console.warn('Local Storage is not available.');
  }
}, 1000);

player.on('timeupdate', updateTimeInLocalStorageThrottled);

try {
  localStorage.setItem('key', 'value');
  localStorage.removeItem('key');
} catch (e) {
  console.warn('Local Storage is not available.');
}

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
