//1er boutton
function nombreDcimaux() {
    var num = parseFloat( prompt("ecrivait un chiffre,please!"));
    while (isNaN(num)) {
        num = parseFloat(prompt("Remplissez le champ correctement avec des chiffres"))
    }
    var rond = Math.trunc(num);
    var decimal = num -rond;
    var message =`le chiffre rond est:${rond}\nle chiffre decimal est:${decimal}.`
    alert(message)
}

//2eme boutton
function loyer() {
    
    var salary = parseFloat(prompt("ecrivait votre salaire,please!"));
    while (isNaN(salary)) {
        salary = parseFloat(prompt("Remplissez le champ de votre salaire correctement avec des chiffres"))
    }

    var rent = parseFloat(prompt("ecrivait votre loyer,please!"));
    while (isNaN(rent)) {
        rent =parseFloat(prompt("Remplissez le champ de votre loyer correctement avec des chiffres"))
    }
    var rentOwed = rent;
    var month = 1;
    var gift = false;
    var surprise = 0;
    var balance = salary * 2;

    if (balance >= rent) {
        balance -= rent;
        rentOwed = 0;
    }

    month++;
    balance += salary / 2;

    if(balance >= rentOwed) {
        balance -= rentOwed;
        rentOwed = 0;
    }

    rentOwed += rent + 200;

    if (balance >= rentOwed) {
    balance -= rentOwed;
    }
    balance -= 500;
    month++;
    if (balance < 0) {
        gift = true;
        surprise = -balance;
    } else {
        surprise = balance;
    }
alert("Le mois: " +month +"\nLe montant du cadeau ou vol: " +surprise +"\nLe loyer du: " +rentOwed +"\nle cadeau: " +gift);

}


//3eme boutton
function formulairUser() {
    
    var user = {
        fullName: { firstName: prompt("prenom"), lastName: prompt("nom") },
        id: parseInt(prompt("Votre numero d'identiter")),
        ddn: prompt("votre date de naissance"),
        creditCards: [
            {name: prompt("Quel est la carte"), number: parseInt(prompt("Numero de carte")), exp: prompt("Date d'expiration (mois/annee)"),cvv: parseInt(prompt("cvv")) },
            //{name: prompt("Quel est la carte"), number: parseInt(prompt("Numero de carte")), exp: prompt("Date d'expiration (mois/annee)"),cvv: parseInt(prompt("cvv")) },
            //{name: prompt("Quel est la carte"), number: parseInt(prompt("Numero de carte")), exp: prompt("Date d'expiration (mois/annee)"),cvv: parseInt(prompt("cvv")) },
        ],
    };
    while (isNaN(user.id)) {
        user.id = parseInt(prompt("Remplissez le champ de votre NUMERO D'IDENTITER correctement avec des chiffres"))
    }
    while (isNaN(user.ddn)) {
        user.ddn = parseInt(prompt("Remplissez le champ de votre DATE DE NAISSANCE correctement avec des chiffres"))
    }
    while (isNaN(user.number)) {
        user.number = parseInt(prompt("Remplissez le champ de votre NUMERO DE CARTE correctement avec des chiffres"))
    }
    while (isNaN(user.exp)) {
        user.exp = parseFloat(prompt("Remplissez le champ DATE D'EXPIRATION correctement avec des chiffres"))
    }
    while (isNaN(user.cvv)) {
        user.cvv = parseFloat(prompt("Remplissez le champ CVV correctement avec des chiffres"))
    }

    var listCard= user.creditCards.join
    var utilisateur =`Prenom:${user.firstName.value} 
                    \nNom:${user.lastName.value}
                    \nNumero d'identiter:${user.id.value}
                    \nDate de naissance:${user.ddn.value}
                    \nCarte de credit:${listCard}`
    var users =user.join
     alert(utilisateur)
     alert(users)
        
}

//4eme boutton
function trouverName() {
    var name = prompt("ecrivait un prenom,SVP").toLowerCase();
    var people = 0;
    var arr=[ ];
    while (name!="david") {
        people++;
        arr.push(`${name}`);
        name=prompt("Vous n'avez pas trouver le prenom cacher retaper un prenom");
        
    }
    var message=`Vous avez fait ${people} tantative de prenom avant de trouver DAVID
                \n Et voici la liste de prenom taper ${arr}`
    alert(message)
    
}

//5eme boutton
function inversNum() {

    var num =prompt("entrer un nombre,SVP")
    while (isNaN(num)) {
        num =parseInt(prompt("Remplissez le champ correctement avec des chiffres"))
    }
    var result= ""
    var dash= ""
    if (num<0) {
        dash="-"
        num=-num
    }
    while (num!=0) {
        result+=num%10
        num=Math.trunc(num/10) // g pa compris pk il faut mettre (/10)
    }
    result=result+dash
    alert(result)
} 


//13eme boutton

function laCentral() {

    var cars =[
        {  
            marqu :"FERRARI",
            model :"F8",
            cathegorie:["SPORT"],
            price:"400 000 €",
            image:"ferrari.jpg",
        },
        {   
            marqu:"TESLA",
            model:["model X"],
            cathegorie:"FAMILLE",
            price:"100 000 €",
            image:"tesla.jpg",
        },
        {
            marqu:"MERCEDES BENZ",
            model:"viano",
            cathegorie:["BUISSNES","FAMILLE"],
            price:"70 000 €",
            image:"mercedes_benz_viano.jpg",
        },
        {
            marqu:"ROLL ROYCE",
            model:"cullinan",
            cathegorie:["LUXE"],
            price:"500 000 €",
            image:"roll_royce.jpg",
        },
        {
            marqu:"JAGUAR",
            model:"XJ50",
            cathegorie:["LUXE"],
            price:"80 000 €",
            image:"jaguar.jpg",
        },
    ]
    var body = document.querySelector("body")
    var bontonApres=document.getElementById("a")



    var divBarre = document.createElement("div")
    divBarre.id="barre"
    divBarre = body.insertBefore(divBarre,bontonApres);     //divBarre = je l'insere dans le body (divBarre je l'insere devant bouttonApres)
    //b.appendChild(divBarre)

    var divBox = document.createElement("div")
    divBox.id="box"
    divBox = body.insertBefore(divBox, divBarre);
    //b.appendChild(divBox)

    var divMain = document.createElement("div")
    divMain.id="main"
    divMain = body.insertBefore(divMain,divBox );      
    //b.appendChild(divMain)

    var i =0
    var toAppend =""
    
    cars.forEach(createHTML)
    divBox.innerHTML+=toAppend

    function createHTML(car,i) {

        toAppend+=`<div id="car${i}"  class="if ${car.cathegorie}" >
                        <h3 class="cathegorie">${car.cathegorie}</h3>
                        <div class="image"><img src="C:/Users/David/Desktop/webschool/projet-js/assets/image/${car.image}" alt="voiture" ></div>
                        </br>
                        <p class="marque">${car.marqu}</p>  
                        </br>
                        <p class="model">${car.model}</p>
                        </br>
                        <p class="price">${car.price}</p>
                        </br>
                        <button class="delete${i} close" >x</button></div>`
                        
                        
    
    }
    
   
        var btn =document.getElementsByClassName("close")
       
        btn.addEventListener("click",deleteCar)
        function deleteCar(btn) {
            btn.parentElement.remove()
    }
        
}


    var autreCheckbox=document.getElementById("autre")

    autreCheckbox.addEventListener("click",function(){             //pk j'ai besoin ici de mettre une fonction annonyme pour que sa marche
       
        var lblArrCheck = document.querySelectorAll(".cathegorie-car")
        var inputArrCheck = document.querySelectorAll(".input-cat")
        lblArrCheck.forEach(displayN) 
        inputArrCheck.forEach(displayN) 
            
        function displayN(car) {
                car.style.display="none" 
            }


        var inputAutre =document.createElement("input")
        inputAutre.type="text"
        inputAutre.placeholder="cathegorie"
        inputAutre.style.display= "block"
        inputAutre.style.marginLeft="88px"
        

        var labelAutre =document.createElement("label")
        labelAutre.innerHTML="quel est la cathegorie <br> de votre voiture<br>"
        labelAutre.style.display="block"

        var btnVendre=document.getElementById("btn-vendre")
        var formulaire=document.querySelector("div")
        formulaire.style.height="330px"
       
       inputAutre=formulaire.insertBefore(inputAutre,btnVendre);
       labelAutre=formulaire.insertBefore(labelAutre,inputAutre);
   
})

function checked() {
        var listCatCheck = [""];

        var inputArrCheck = document.querySelectorAll(".input-cat");
        inputArrCheck.forEach(checkAdd)

        function checkAdd(i) {
            addEventListener("change", function () {
                 
                    listCatCheck.push(inputArrCheck[i]);
                
            });

            
        }console.log(listCatCheck);
}
checked()

function ajouter() {

    var inputMarqu =document.getElementById("marqu").value
    var inputmodel =document.getElementById("model").value
    var inputprice =document.getElementById("price").value
    var inputimagefile =document.getElementById("image-file").value
    var inputCheck =document.getElementById("marqu")

    //if (inputMarqu||inputmodel||inputprice||inputimagefile||inputCheck=) {
        
    //}
    
    
    function Car(_marqu, _model, _cathegorie, _price, _image) {
        this.marqu = _marqu;
        this.model = _model;
        this.cathegorie = _cathegorie;
        this.price = _price;
        this.image = _image;
        }
    

    
    var obj = new Car(inputMarqu,inputmodel,inputprice,inputimagefile,inputCheck)
    
}


    

   





//14eme boutton
/*function na() {
    const ppl =["Tim","Bob","Mike"]
    ppl.pourChak=function (callBack) {
        for (let i = 0; i < ppl.length; i++) {
            const element = ppl[i];
            callBack(element,i)
        }
    }
    ppl.pourChak(showName)
    function showName(n,i) {
        console.log(i+": "+ n);
        
    */