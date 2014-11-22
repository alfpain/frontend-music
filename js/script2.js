OrderList = [];
OrderDuration = [];
OrderPlayCount = [];
name2 = [];
playcount2 = [];
listeners2 = [];
artis2 = [];
duration2 = [];
Biography2 = [];
ListenSong2 = [];
imagen2 = [];



jQuery(document).ready(function($) {
  $.ajax({
  url : "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=05d4b311160508e4320ec650346e45c8&format=json",
  dataType : "jsonp",
    success : function(parsed_json) {

      for (var i = 0; i <= 50; i++) {
        OrderList.push(parsed_json["tracks"]["track"][i]["name"])
        OrderDuration.push(parsed_json["tracks"]["track"][i]["duration"])
        OrderPlayCount.push(parsed_json["tracks"]["track"][i]["playcount"])
        name2.push(parsed_json["tracks"]["track"][i]["name"])
        playcount2.push(parsed_json["tracks"]["track"][i]["playcount"])
        listeners2.push(parsed_json["tracks"]["track"][i]["listeners"])
        artis2.push(parsed_json["tracks"]["track"][i]["artist"]["name"])
        duration2.push(parsed_json["tracks"]["track"][i]["duration"])
        Biography2.push(parsed_json["tracks"]["track"][i]["artist"]["url"])
        ListenSong2.push(parsed_json["tracks"]["track"][i]["url"])

        try {imagen2.push(parsed_json["tracks"]["track"][i]["image"][2]["#text"])}
        catch(err){imagen2.push("https://www.wordans.ca/wvc-1332825671/wordansfiles/images/2012/3/27/133476/133476_340.jpg")}

        var play = "http://img268.imageshack.us/img268/4378/buttonplayc.png"
        $(".TopList").append("<div class=\"name\">"+"<h3>"+name2[i]+" - "+artis2[i]+"</h3>"+"<p>"+"Duration: "+(duration2[i]/60).toFixed(2)+" Listeners: "+listeners2[i]+" playcount: "+playcount2[i]+"</p>"+ "<p>"+"<a href=\""+Biography2[i]+"\" style= 'color: #ffffff' >"+" Biography Artist "+"</a>"+"</p>"+"<img src=\""+imagen2[i]+"\" class = 'imagen2'>"+"<div class = 'range'>"+(i+1)+"</div>"+"<a href =\""+ListenSong2[i]+"\">"+"<img src=\""+play+"\" class = 'play2'>"+"</a>"+"</div>" );
      };
    }
  });
});



$(document).ready(function() {
  function alphabeticalaz(a, b){
    var A = a.toLowerCase();
    var B = b.toLowerCase();
    if (A < B){
      return -1;
    }else if (A > B){
     return  1;
    }else{
     return 0;
    }
  };

  function alphabeticalza(a, b){
      var A = a.toLowerCase();
      var B = b.toLowerCase();
      if (A > B){
        return -1;
      }else if (A < B){
       return  1;
      }else{
       return 0;
      }
  };

  function FunOrderDurationAscen(a, b){
    a = a/60
    b = b/60
    if (a>b) {return 1}else{return 0};
  };

  function FunOrderDurationDescen(a, b){
    a = a/60
    b = b/60
    if (a<b) {return 1}else{return 0};
  };

  function FunOrderPlayCountAscen(a, b){
    if (a>b) {return 1}else{return 0};
  };

  function FunOrderPlayCountDescen(a, b){
    if (a<b) {return 1}else{return 0};
  };

  $(".DelFilters").click(function(){
    $(".TopList").empty();
    OrderList.sort(alphabeticalaz);

    for (var i = 0; i <50; i++) {
        var play = "http://img268.imageshack.us/img268/4378/buttonplayc.png"
        $(".TopList").append("<div class=\"name\">"+"<h3>"+name2[i]+" - "+artis2[i]+"</h3>"+"<p>"+"Duration: "+(duration2[i]/60).toFixed(2)+" Listeners: "+listeners2[i]+" playcount: "+playcount2[i]+"</p>"+ "<p>"+"<a href=\""+Biography2[i]+"\" style= 'color: #ffffff' >"+" Biography Artist "+"</a>"+"</p>"+"<img src=\""+imagen2[i]+"\" class = 'imagen2'>"+"<div class = 'range'>"+(i+1)+"</div>"+"<a href =\""+ListenSong2+"\">"+"<img src=\""+play+"\" class = 'play2'>"+"</a>"+"</div>" );
    };
  });

  $(".az").click(function(){
    $(".TopList").empty();
    OrderList.sort(alphabeticalaz);

    for (var x = 0; x <50; x++) {
      for (var i = 0; i <50; i++) {
        if (OrderList[x] === name2[i]) {
          var play = "http://img268.imageshack.us/img268/4378/buttonplayc.png"
          $(".TopList").append("<div class=\"name\">"+"<h3>"+name2[i]+" - "+artis2[i]+"</h3>"+"<p>"+"Duration: "+(duration2[i]/60).toFixed(2)+" Listeners: "+listeners2[i]+" playcount: "+playcount2[i]+"</p>"+ "<p>"+"<a href=\""+Biography2[i]+"\" style= 'color: #ffffff' >"+" Biography Artist "+"</a>"+"</p>"+"<img src=\""+imagen2[i]+"\" class = 'imagen2'>"+"<div class = 'range'>"+(i+1)+"</div>"+"<a href =\""+ListenSong2+"\">"+"<img src=\""+play+"\" class = 'play2'>"+"</a>"+"</div>" );
        };
      };
    };
  });

  $(".za").click(function(){
    $(".TopList").empty();
    OrderList.sort(alphabeticalza);

    for (var x = 0; x <50; x++) {
      for (var i = 0; i <50; i++) {
        if (OrderList[x] === name2[i]) {
          var play = "http://img268.imageshack.us/img268/4378/buttonplayc.png"
          $(".TopList").append("<div class=\"name\">"+"<h3>"+name2[i]+" - "+artis2[i]+"</h3>"+"<p>"+"Duration: "+(duration2[i]/60).toFixed(2)+" Listeners: "+listeners2[i]+" playcount: "+playcount2[i]+"</p>"+ "<p>"+"<a href=\""+Biography2[i]+"\" style= 'color: #ffffff' >"+" Biography Artist "+"</a>"+"</p>"+"<img src=\""+imagen2[i]+"\" class = 'imagen2'>"+"<div class = 'range'>"+(i+1)+"</div>"+"<a href =\""+ListenSong2+"\">"+"<img src=\""+play+"\" class = 'play2'>"+"</a>"+"</div>" );
        };
      };
    };
  });

  $(".durationAscen").click(function(){
    $(".TopList").empty();
    OrderDuration.sort(FunOrderDurationAscen);
    for (var x = 0; x <50; x++) {
      for (var i = 0; i <50; i++) {
        if (OrderDuration[x] === duration2[i]) {
          var play = "http://img268.imageshack.us/img268/4378/buttonplayc.png"
          $(".TopList").append("<div class=\"name\">"+"<h3>"+name2[i]+" - "+artis2[i]+"</h3>"+"<p>"+"Duration: "+(duration2[i]/60).toFixed(2)+" Listeners: "+listeners2[i]+" playcount: "+playcount2[i]+"</p>"+ "<p>"+"<a href=\""+Biography2[i]+"\" style= 'color: #ffffff' >"+" Biography Artist "+"</a>"+"</p>"+"<img src=\""+imagen2[i]+"\" class = 'imagen2'>"+"<div class = 'range'>"+(i+1)+"</div>"+"<a href =\""+ListenSong2+"\">"+"<img src=\""+play+"\" class = 'play2'>"+"</a>"+"</div>" );
        };
      };
    };
  });

  $(".durationDescen").click(function(){
    $(".TopList").empty();
    OrderDuration.sort(FunOrderDurationDescen);
    for (var x = 0; x <50; x++) {
      for (var i = 0; i <50; i++) {
        if (OrderDuration[x] === duration2[i]) {
          var play = "http://img268.imageshack.us/img268/4378/buttonplayc.png"
          $(".TopList").append("<div class=\"name\">"+"<h3>"+name2[i]+" - "+artis2[i]+"</h3>"+"<p>"+"Duration: "+(duration2[i]/60).toFixed(2)+" Listeners: "+listeners2[i]+" playcount: "+playcount2[i]+"</p>"+ "<p>"+"<a href=\""+Biography2[i]+"\" style= 'color: #ffffff' >"+" Biography Artist "+"</a>"+"</p>"+"<img src=\""+imagen2[i]+"\" class = 'imagen2'>"+"<div class = 'range'>"+(i+1)+"</div>"+"<a href =\""+ListenSong2+"\">"+"<img src=\""+play+"\" class = 'play2'>"+"</a>"+"</div>" );
        };
      };
    };
  });

  $(".playcountAscen").click(function(){
    $(".TopList").empty();
    OrderPlayCount.sort(FunOrderDurationAscen);
    for (var x = 0; x <50; x++) {
      for (var i = 0; i <50; i++) {
        if (OrderPlayCount[x] === playcount2[i]) {
          var play = "http://img268.imageshack.us/img268/4378/buttonplayc.png"
          $(".TopList").append("<div class=\"name\">"+"<h3>"+name2[i]+" - "+artis2[i]+"</h3>"+"<p>"+"Duration: "+(duration2[i]/60).toFixed(2)+" Listeners: "+listeners2[i]+" playcount: "+playcount2[i]+"</p>"+ "<p>"+"<a href=\""+Biography2[i]+"\" style= 'color: #ffffff' >"+" Biography Artist "+"</a>"+"</p>"+"<img src=\""+imagen2[i]+"\" class = 'imagen2'>"+"<div class = 'range'>"+(i+1)+"</div>"+"<a href =\""+ListenSong2+"\">"+"<img src=\""+play+"\" class = 'play2'>"+"</a>"+"</div>" );
        };
      };
    };
  });

  $(".playcountDescen").click(function(){
    $(".TopList").empty();
    OrderPlayCount.sort(FunOrderDurationDescen);
    for (var x = 0; x <50; x++) {
      for (var i = 0; i <50; i++) {
        if (OrderPlayCount[x] === playcount2[i]) {
          var play = "http://img268.imageshack.us/img268/4378/buttonplayc.png"
          $(".TopList").append("<div class=\"name\">"+"<h3>"+name2[i]+" - "+artis2[i]+"</h3>"+"<p>"+"Duration: "+(duration2[i]/60).toFixed(2)+" Listeners: "+listeners2[i]+" playcount: "+playcount2[i]+"</p>"+ "<p>"+"<a href=\""+Biography2[i]+"\" style= 'color: #ffffff' >"+" Biography Artist "+"</a>"+"</p>"+"<img src=\""+imagen2[i]+"\" class = 'imagen2'>"+"<div class = 'range'>"+(i+1)+"</div>"+"<a href =\""+ListenSong2+"\">"+"<img src=\""+play+"\" class = 'play2'>"+"</a>"+"</div>" );
        };
      };
    };
  });

});
