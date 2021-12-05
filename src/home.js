var data;
var col = 0;
var fav = ['468523'];
//add
/*
//delete
  - find parent tr id (same as event id)
  - delete the whole row
*/
$(document).ready(function() {
    //get data from txt
    $.ajax({
            url: "data.txt",
            type: "GET"
        })
        /*
        .done(function(txt) {
            //get data
            //create each table row
            data = JSON.parse(txt);
            $.ajax({
                url: "Home.html",
                type: "GET"
            })*/
        .done(function(txt) {
            //$("#main").html(txt);
            //create each table row (will duplicate if uncommented above)
            data = JSON.parse(txt);
            data.map((e, index) => {
                //id is a number
                //alert(typeof(e.event_id));
                var $temp = $('<tr id="' + e.event_id + '">\
                <td scope="row" class="p-3" onclick="">' + e.event_summary + '</td>\
                <td class="p-3">' + e.event_location + '</td>\
                <td class="p-3 ">' + e.event_org + '</td>\
                <td class="p-4"><button></button></td>\
                <td class="p-3"><input type="button" value="Delete"></td>\
                ');

                $temp.find("td:first").click(function() { getEachEvent(); });


                if (fav.indexOf(index) == -1) {
                    $temp.find("button").html("Add to Favourites");
                } else {
                    $temp.find("button").html("Undo Favourites");
                }
                $temp.find("button").attr("id", index);
                $temp.find("button").addClass("like");

                $("#evts").append($temp);
            });
        });
    //});

    //toggle favourites
    $(document).on("click", "button.like", function() {
        var id = $(this).attr("id");
        //id is a string
        //alert(typeof(id));
        var index = fav.indexOf(id);
        //alert(index);

        //if the event is not one of favourites
        if (index > -1) {
            fav.push(id);
            $(this).html("Undo Favourites");

        } else {
            fav.splice(id, 1);
            $(this).html("Add to Favourites");
        }
        alert(fav);
    });
});

//sorting table entries
function sortTable(n) {
    var table, rows, switching, i, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            var x = rows[i].getElementsByTagName("TD")[n];
            var y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
//searching
function menu() {
    var input, filter, table, tr, a, i, txtValue;
    var no;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    //tr is the array of table row, remember to skip index 0
    tr = table.getElementsByTagName("tr");
    var no = 0;
    for (i = 1; i < tr.length; i++) {
        //get the value of first data in table row
        a = tr[i].getElementsByTagName("td")[col];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            no++;
        } else {
            tr[i].style.display = "none";
        }

    }
    var nth = document.getElementById("na");

    if (no == 0) {
        nth.style.display = "";
    } else {
        nth.style.display = "none";
    }
}

function search(str) {
    document.getElementById("show").value = str;
    if (str == 'Event') {
        //set search criteria to events col
        col = 0;
    }
    if (str == "Location") {
        //set search criteria to location col
        col = 1;
    }
    if (str == "Organizer") {
        //set search criteria to location col
        col = 2;
    }
}

function getEachEvent(savedResponse) {
    changePage("event");

    console.log(savedResponse);


}