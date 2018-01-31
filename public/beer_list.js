// const BeerList = function(url) {
//   this.url = url;
//   this.beers = [];
//   this.onUpdate = null;
// }

// BeerList.prototype = {
//   getData: function() {
//     var request = new XMLHttpRequest();
//     request.open('GET', this.url);

//     request.addEventListener('load', function() {
//       if(request.status !== 200) return;
//       var jsonString = this.responseText;
//       var beers = JSON.parse(jsonString);
//       this.beers = beers;
//       this.onUpdate();
//     }.bind(this));

//     request.send();
//   }
// };
