var apiKey = "aeqZ2Z4I3LkqTdTbfx2ihdGHbkFgnewkRHlrZYV5";
var ndbno = "01009";
var type = "b";
var format = "json";

var url = "http://api.nal.usda.gov/ndb/reports/?ndbno=" + ndbno + "&type=" + type + "&format=" + format + "&api_key=" + apiKey;

$.get(url, function(data) {
    alert("Data loaded: " + JSON.stringify(data));
});

function onSubmit()
{
    var food = document.getElementById("food").value;
    alert(food);
}