var appendElements = function(container, elements) {
  for(element of elements) {
    container.appendChild(element);
  }
}

var getIngredients = function(array) {
  var ingredients = '';
  for(each of array) {
    ingredients += each.name + '\n';
  }
  return ingredients;
}

var createOverlay = function(item) {
  var overlay = document.createElement('div');
  overlay.className = 'overlay';

  var hops = document.createElement('p');
  hops.innerText = 'Hops:\n\n' + getIngredients(item.ingredients.hops);

  var malt = document.createElement('p');
  malt.innerText = 'Malt:\n\n' + getIngredients(item.ingredients.malt);

  var yeast = document.createElement('p');
  yeast.innerText = 'Yeast:\n\n' + item.ingredients.yeast;

  appendElements(overlay, [hops, malt, yeast]);

  return overlay;
}

var addItem = function(list, item) {
  var li = document.createElement('li');
  var h5 = document.createElement('h5');
  var img = document.createElement('img');
  

  h5.innerText = item.name;
  img.src = item.image_url;
  img.height = 200;

  var ingredientsOverlay = createOverlay(item);
  var elements = [h5, img, ingredientsOverlay];
  appendElements(li, elements);
  list.appendChild(li);
}

var populateList = function(list, array) {
  for(each of array) {
    addItem(list, each);
  }
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var beers = JSON.parse(jsonString);
  var ul = document.querySelector('#beers');
  populateList(ul, beers);
  console.log(beers);
}

var app = function(){
  var url = 'https://api.punkapi.com/v2/beers';
  makeRequest(url, requestComplete);
}

document.addEventListener('DOMContentLoaded', app);
