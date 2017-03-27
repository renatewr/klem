
import headerMarkup from './header';
import objectFitImages from 'object-fit-images'

console.log('yo');

require('./styles.less');
require('./logo_2.JPG');

var OfflinePlugin = require('offline-plugin/runtime');

OfflinePlugin.install({
  onInstalled: function() {
    openOfflineReady();
  },

  onUpdating: function() {

  },

  onUpdateReady: function() {
    OfflinePlugin.applyUpdate();
  },
  onUpdated: function() {
    window.location.reload();
  }
});

window.addEventListener('offline', function() {
  goOffline();
});

window.addEventListener('online', function() {
  console.log("online");
});

if (!navigator.onLine) {
  setTimeout(function() {
    goOffline();
  }, 300);
}

function goOffline() {
  console.log("goOffline");
}

function openOfflineReady() {
  console.log("openofflineReady");
}

const bodyEl = document.getElementsByTagName('nav')[0];
bodyEl.innerHTML = headerMarkup();
objectFitImages();

