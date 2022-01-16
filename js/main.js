function nombreDcimaux() {
    var num = parseFloat( prompt("ecrivait un chiffre,please!"));
    var rond = Math.trunc(num);
    var decimal = num -rond;
    var message =`le chiffre rond est:${rond}\nle chiffre decimal est:${decimal}.`
    alert(message)
}


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

