$(document).ready(function() {
	//Code
var cd = $('.cds-container')
var source = $("#cd-template").html();
var template = Handlebars.compile(source);

  $.ajax({

  url:'https://flynn.boolean.careers/exercises/api/array/music',
  method: 'GET',
  success: function(data) {
    console.log(data)

var cds = data.response;

    for (var i = 0; i < cds.length; i++){

var thisCd = cds[i];




var context = {
  poster: thisCd.poster,
  genres: thisCd.genres,
  title: thisCd.title,
  author: thisCd.author,
  year: thisCd.year
};


 var html = template(context);
 cd.append(html)

    }

  },
error: function (){
  console.log('Error')
}

})


});
