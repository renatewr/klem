fetch('/ads.js')
       .then(function fetchthis(response) {
           console.log(response, false);
           return false;
       }).catch(function(err) {
          console.log(err, true);
           return true;
       });
