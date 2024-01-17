var header = document.querySelector("header");
var section = document.querySelector("section");
var requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
var request = new XMLHttpRequest;

request.open("GET", requestURL)
request.responseType = 'json';
request.send();


request.onload = function(){
    var superHeroes = request.response;

    console.log(superHeroes)
    console.log(JSON.stringify(superHeroes, null, 2));

    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(jsonObj){
    var myH1 = document.createElement("h1");
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = "Hometown: " + jsonObj["hometown"] + "// Formed: " + jsonObj["formed"];

    header.appendChild(myPara);
}

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
        for(var j = 0; j < superPowers.length; j++){
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

//Para começar, armazenamos a propriedade members do objeto JavaScript em uma nova variável. Esta matriz contém vários objetos que contêm as informações para cada herói.

//Preenchemos os três parágrafos com sua secretIdentity, age, e uma linha dizendo "Superpoderes:" para introduzir as informações na lista.

//Armazenamos a propriedade powers em outra nova variável chamada superPowers — isso contém uma matriz que lista os superpoderes do herói atual.

//No primeiro loop usamos variaveis para criar elementos como p, h1 e h2 que serão preenchidos com as informações de herore[i]. name, age etc...

//Usamos o segundo loop for para armazenar os superpoderes de cada heroi, adicionamos à lista 'listItem" e depois exibimos na tela com o appendChild()