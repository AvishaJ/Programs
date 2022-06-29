let test_prime=(number)=>{
  if (number===1)
  {
    console.log(number + " is not a prime number");
  }
  else if(number === 2)
  {
    console.log(number + " is a prime number");
  }
  else
  {
    for(let x = 2; x < number; x++)
    {
      if(number % x === 0)
      {
        console.log(number + " is not a prime number");
      }
    }
  }
}



