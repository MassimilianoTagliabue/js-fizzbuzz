

const fizz = "Fizz";
const buzz = "Buzz";

    //ciclo for
for (let i = 1; i <= 100; i++) {

    //controllo se divisibili sia per 5 che per 3
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(fizz + buzz)
    }

    
    else {
        
        //controllo se divisibili per 3 
        if (i % 3 === 0) {
            console.log(fizz);

        //controllo se divisibili per 5 
        } else if (i % 5 === 0) {

            console.log(buzz);

        //stampo numeri
        } else {

            console.log(i);

        }

    }


}