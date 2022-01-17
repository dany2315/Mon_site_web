//1er boutton
function nombreDcimaux() {
    var num = parseFloat( prompt("ecrivait un chiffre,please!"));
    var rond = Math.trunc(num);
    var decimal = num -rond;
    var message =`le chiffre rond est:${rond}\nle chiffre decimal est:${decimal}.`
    alert(message)
}

//2eme boutton
function loyer() {
    
    var salary = parseFloat( prompt("ecrivait votre salaire,please!"));
    var rent = parseFloat( prompt("ecrivait votre loyer,please!"));
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
                \n Et voivi la liste de prenom taper ${arr}`
    alert(message)
    
}

//5eme boutton
function inversNum() {
    var num =prompt("entrer un chiffre,SVP")
    var result= ""
    var dash= ""
    if (num<0) {
        dash="-"
        num=-num
    }
    while (num!=0) {
        result+=num%10
        num==Math.trunc(num/10)
    }
    result=result+dash
    alert(result)
} 
