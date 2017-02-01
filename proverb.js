$(document).ready(function () {

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs", false);
// xhr.send();
//
// console.log(xhr.status);
// console.log(xhr.statusText);
// console.log(xhr);
//
// console.log(XMLHttpRequest.response);

$.ajax({
  url: 'https://eda-te-reo.herokuapp.com/api/proverbs',
  data: {
    format: 'json'
  },
  dataType: 'json',
  success: function(data) {
    var $source = $('#maori').text(data.source);
    var $translation = $('#english').text(data.translation);
  twitterShare();
  },
  type: 'GET'
})

function twitterShare() {
  var maori = document.getElementById("maori").textContent;
  var english = document.getElementById("english").textContent;
  var quote = maori + " " + english;
  console.log(quote);
  console.log(url);
  var url = document.getElementById("twitter-link").setAttribute("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote));
}






});
