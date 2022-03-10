const a= [5,48,1,5,4852,25].map((val) => {
    if (val %2 ===0){
        return "even";
    }
    return "Odd";
})
alert(a);

const b= [5,48,1,5,4852,25].map((val) => {
    return val % 2 === 0 ? "even" : "odd";
})
alert(b);