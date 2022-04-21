var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://baconipsum.com/api/?type=all-meat&sentences=1&format=text", false );
xmlHttp.send( null );
var msg = document.getElementById("lorem");
msg.innerHTML = xmlHttp.responseText;
