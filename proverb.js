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
    console.log(data);
  },
  type: 'GET'
})


});
