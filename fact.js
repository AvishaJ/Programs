let fact=(number)=>{
    let ans = 1;
    if(number == 0 || number == 1)
    {
        return ans;
    }
    else
    {
        for( let i = number; i>=1; i--)
        {
            ans = ans * i;
        }
        return ans;
    }
console.log("The factorial of " + number + " is " + ans);
}
