var i =0
var toAppend =""

cars.forEach(createHTML)
divMain.innerHTML+=toAppend

function createHTML(car,i) {

    var a ="car"
    var b = i+1
    var divCar =document.createElement("div");
    divCar.id=`car${i+1}`;
    divCar.className=`if ${car.cathegorie}`

    var h3 = document.createElement("h3");
    h3.className=`cathegorie`;
    h3.innerText=`${car.cathegorie}`

    var divImage = document.createElement("div");
    divImage.className="image";
    divImage.innerText=`<img src="C:/Users/David/Desktop/webschool/projet-js/assets/image/${car.image}" alt="voiture" >`;

    var espace = document.createElement("br");
    
    var marque = document.createElement("p");
    marque.className="marque";
    marque.innerText=`${car.marqu}`;

    var espace2 = document.createElement("br");

    var model = document.createElement("p");
    model.className="model";
    model.innerText=`${car.model}`;

    var espace3 = document.createElement("br");
}