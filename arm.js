console.log ('Armstrong Numbers:');

for (let i = 0; i <= 10000; i++) {

    let numberOfDigits = i.toString().length;

    let sum = 0;
    
    let temp = i;
   
    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        temp = parseInt(temp / 10); // convert float into integer
    }
 
    if (sum == i) {
        console.log(i);
    }
}