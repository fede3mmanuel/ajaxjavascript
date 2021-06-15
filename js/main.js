let pageCounter = 1;

var animalContainer = document.getElementById("animal-info");

var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);

    ourRequest.onload = function () {
    
        // console.log(ourRequest.responseText);
        // With the folowing the browser thinks that is text
        // let ourData = ourRequest.responseText;
        // With the folowing the browser knows that is a json file
        let ourData = JSON.parse(ourRequest.responseText)
        renderHTML(ourData);
    
    };

    ourRequest.send();
    pageCounter++;

    if (pageCounter > 3) {
        btn.classList.add("hide-me");        
    }
});

function renderHTML(data) {
    let htmlString = "";

    for (let i = 0; i < data.length; i++) {
        
        htmlString += "<p>" + data[i].name + " is a" + data[i].species + "that likes to eat ";

        for (let ii = 0; ii < data[i].foods.likes.length; ii++) {
            
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            }   else {
                htmlString += " and " + data[i].foods.likes[ii];

            }         
        }

        htmlString += ' and dislikes ';

        for (let ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            }   else {
                htmlString += " and " + data[i].foods.dislikes[ii];

            }         
        }

        htmlString += '</p>';
        
    }
    
    animalContainer.insertAdjacentHTML('beforeend', htmlString)
}
