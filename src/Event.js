// <!-- please change to other file name to avoid cofusion btw model/Event.js -->

//need to get user info for displaying name and icon
//how to save and retrieve comments, txt, json, database?
var name = "Name";
$(document).ready(function(){
    $(document).on("click","#post", function(){
        if($(document).find("#comment").val() != ''){
            var $new = $('<li><svg><circle></circle></svg><div><h5></h5><p></p><br></div></li>');
            $new.addClass("media");
            $new.find("div").addClass("media-body");
            $new.find("svg").attr({
                "height": 100,
                "width": 100
            });
            $new.find("h5").html(name);
            $new.find("p").html($("#comment").val());
            $new.find("circle").attr({"cx":"50","cy":"50","r":"40","fill":"blue"});
            var x = $(document).find("#list");
            x.append($new);
            $(document).find("#comment").val('');
        }
    });

    //get data
    $.ajax({
        url: "data.txt",
        type: "GET"
    })
    .done(function(txt) {
        //get data for the event from txt file
        data = JSON.parse(txt);
        $(document).find("#summary").html(data[0].event_summary);
        $(document).find("#e_id").html("#"+data[0].event_id);
        $(document).find("#date").html(data[0].event_date);
        $(document).find("#desc").html(data[0].event_desc);
        $(document).find("#ics").attr("href", data[0].event_ics);
    });
});
