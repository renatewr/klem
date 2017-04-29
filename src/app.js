
import headerMarkup from './header';
import objectFitImages from 'object-fit-images'


require('./styles.less');

var OfflinePlugin = require('offline-plugin/runtime');

OfflinePlugin.install({
    onUpdateReady: function() {
        OfflinePlugin.applyUpdate();
    },
    onUpdated: function() {
        window.location.reload();
    }
});


if (!navigator.onLine) {
  setTimeout(function() {
    goOffline();
  }, 300);
}

function goOffline() {
  console.log("goOffline");
}


const bodyEl = document.getElementsByTagName('nav')[0];
bodyEl.innerHTML = headerMarkup();
objectFitImages();
