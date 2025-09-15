
//promise =>

// let ice_cream = new Promise((res , rej) =>{
//     let got_ice_cream = false;
//     if (got_ice_cream) res(got_ice_cream);
//     else rej(got_ice_cream);
// })

// console.log('got the icecream', ice_cream);


// ice_cream.then(()=> {console.log('got the icecream')}).catch(()=> {console.log('not get!!')});

 





//promise using set timeout function =>

console.log('A');

let ice_cream = new Promise((res , rej) =>{
    let got_ice_cream;
    console.log('B');
    
    setTimeout(() => {
        got_ice_cream = true;
        if (got_ice_cream) {
            res(got_ice_cream);
        }
        else {
            rej(got_ice_cream);
        }
    }, 3000);
    
    console.log('C');
});

console.log('D');

console.log('ice cream', ice_cream);

ice_cream.then(() =>{
    console.log('eat ice cream');
})
    .catch(() => {
        console.log('call moomy');
    });


console.log('E')

