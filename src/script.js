
var fav = [1];

$(document).ready(function(){
    //history.pushState( null, null, 'login');
    //window.addEventListener("popstate");
    //toggle favourites

    $(document).on("click","button.like", function(){
        var id = $(this).attr("id");
        var index = fav.indexOf(id);
        
        
        //if the event is not one of favourites
        if(index == -1){
            $(this).html("Add to Favourites");
            fav.push(id);
        }
        else{
            $(this).html("Undo Favourites");
            fav.splice(id, 1);
        }
    });
    //when any event is clicked
    /*
    $(document).on("click","tr", function(){
        var id = $(this).attr("id");
        var att = $(this).find("div").html();
        alert(data[id].name);
        alert(att);
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        
    });*/
});


//load next page after login --Wrong
/*
function fav(){
    $.ajax({
        url: "favourites.html",
        type: "GET"
    })
    .done(function(txt){
        $("#main").html(txt);
    });
}
*/


//data verification http request
//data type of event id
