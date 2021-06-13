var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

ourRequest.onload = function () {
    // console.log(ourRequest.responseText);
    // With the folowing the browser thinks that is text
    let ourData = ourRequest.responseText;
    console.log(ourData[0]);
};

ourRequest.send();