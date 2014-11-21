OrderList = []
name = []
playcount = []
artis = []
duration = []
Biography = []
imagen = []

jQuery(document).ready(function($) {
  $.ajax({
  url : "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=05d4b311160508e4320ec650346e45c8&format=json",
  dataType : "jsonp",
  success : function(parsed_json) {

  	for (var i = 0; i <= 50; i++) {
  OrderList.push(parsed_json["tracks"]["track"][i]["name"]);
  var name = parsed_json["tracks"]["track"][i]["name"]
  var playcount = parsed_json["tracks"]["track"][i]["playcount"]
  var listeners = parsed_json["tracks"]["track"][i]["listeners"]
  var artis = parsed_json["tracks"]["track"][i]["artist"]["name"]
  var duration = parsed_json["tracks"]["track"][i]["duration"]
  var Biography = parsed_json["tracks"]["track"][i]["artist"]["url"]
  try {
var imagen = parsed_json["tracks"]["track"][i]["image"][2]["#text"]
  }
  catch(err){
  var imagen = "https://www.wordans.ca/wvc-1332825671/wordansfiles/images/2012/3/27/133476/133476_340.jpg"
  }
  var play = "http://img268.imageshack.us/img268/4378/buttonplayc.png"
  $(".cosa").append("<div class=\"name\">"+"<h3>"+name+" - "+artis+"</h3>"+"<p>"+"Duration: "+(duration/60).toFixed(2)+" Listeners: "+listeners+" playcount: "+playcount+"</p>"+ "<p>"+"<a href=\""+Biography+"\" style= 'color: #ffffff' >"+" Biography Artist "+"</a>"+"</p>"+"<img src=\""+imagen+"\" class = 'imagen2'>"+"<div class = 'range'>"+(i+1)+"</div>"+"<img src=\""+play+"\" class = 'play2'>"+"</div>" );


  	};
 


  }
  });
});


/*
function alphabetical(a, b)
{
     var A = a.toLowerCase();
     var B = b.toLowerCase();
     if (A > B){
        return -1;
     }else if (A < B){
       return  1;
     }else{
       return 0;
     }
}


colors = []

jQuery(document).ready(function($) {
  $.ajax({
  url : "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=05d4b311160508e4320ec650346e45c8&format=json",
  dataType : "jsonp",
  success : function(parsed_json) {
    for (var i = 0; i <= 50; i++) {

colors.push(parsed_json["tracks"]["track"][i]["name"]);

    };
  }
  });

$(".az").click(function(){

colors.sort(alphabetical);

var cj = colors.join(", ");
for (var i = 0; i <= 50; i++) {
$("").append(i+""+colors[i]+"<br/>")
};
  
});

});
*/