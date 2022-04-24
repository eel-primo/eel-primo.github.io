// Get text filler from API
let xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://baconipsum.com/api/?type=all-meat&sentences=1&format=text", false );
xmlHttp.send( null );

// Get the element and change the text to the query result
let lorem = document.getElementById("lorem");
lorem.innerHTML = xmlHttp.responseText;

// That's all code!
