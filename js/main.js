var animalContainer = document.getElementById("animal-info");

var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

    ourRequest.onload = function () {
    
        // console.log(ourRequest.responseText);
        // With the folowing the browser thinks that is text
        // let ourData = ourRequest.responseText;
        // With the folowing the browser knows that is a json file
        let ourData = JSON.parse(ourRequest.responseText)
        renderHTML(ourData);
    
    };

    ourRequest.send();
});

function renderHTML(data) {
    let htmlString = "";

    for (let i = 0; i < data.length; i++) {
        
        htmlString += "<p>" + data[i].name + " is a" + data[i].species + ".</p>";
        
    }
    
    animalContainer.insertAdjacentHTML('beforeend', htmlString)
}
