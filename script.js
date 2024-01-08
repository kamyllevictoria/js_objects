var header = document.querySelector("header");
var section = document.querySelector("section");
var requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

var request = new XMLHttpRequest; //creating a new instance of API
request.open("GET", requestURL) //opening a new solicitation of requestURL

request.responseType = 'json';
request.send(); //We use the responseType() method so that XHR knows that the server will return JSON and that this must be converted behind the scenes into a JavaScript object. Then we send the request with the send() method:

//The last part of this section involves waiting for the response to return from the server and then dealing with it.
request.onload = function(){
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}
//Here we are storing the response to our request (available in the response (en-US) property) in a variable called superHeroes, now this variable will now contain the JSON-based JavaScript object!


//function to fill the header 
function populateHeader(jsonObj){
    var myH1 = document.createElement("h1");
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
    var myPara = document.createElement('p');
    myPara.textContent = "Hometown: " + jsonObj["hometown"] + "// Formed: " + jsonObj["formed"];
    header.appendChild(myPara);
}
//We call the jsonObj parameter, to remind ourselves that this JavaScript object originated from JSON


//function to fill the heroe's info
function showHeroes(jsonObj){
    var heroes = jsonObj["members"];
    for(var i = 0; i < heroes.length; i++){
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        myH2.textContent = heroes[i].name;
        myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
        myPara2.textContent = "Age: " + heroes[i].age;
        myPara3.textContent = "Superpowers: ";

        var superPowers = heroes[i].powers;
        for(var j = 0; j < superPowers[j]; j++){
            var listItem = document.createElement('li')
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }

}