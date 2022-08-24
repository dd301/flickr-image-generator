var main = function () {
"use strict";
    
    var displayImages = function(tag){
        
        var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags="+ tag +"&format=json&jsoncallback=?";
        $.getJSON(url, function(flickrResponse){
            flickrResponse.items.forEach(function(photo){
                var $img = $("<img>").hide();
                $img.attr("src", photo.media.m);
                $("main .photos").append($img);
                $img.fadeIn();
            });
        });

    };
    
        
    $(".tag-input button").on("click", function(event){
        if ($(".tag-input input").val() !== ""){
            $("main .photos").empty();
            displayImages($(".tag-input input").val());
            $(".tag-input input").val("");
        }
    });

}

$(document).ready(main);