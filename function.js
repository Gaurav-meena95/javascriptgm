// function saymyName() 
}
// saymyName()

// function AaddtoNumber(num1,num2){
    //     console.log(num1+num2)
    // }
    // AaddtoNumber(3,4)
    // AaddtoNumber(3,'4')
    // AaddtoNumber(3,'a')
    // AaddtoNumber(3,null)
    
    

//     function AaddtoNumber(num1,num2){
//         let result =num1+num2
//         console.log("Gaurav Meena ")
//         return result
//     }
// const result = AaddtoNumber(8,4)
// console.log(result);


// function AaddtoNumber(num1,num2){
//     return num1+num2

// }
// const result = AaddtoNumber(8,4)
// console.log(result);

function loginUser(username){
    if (username===undefined){
        console.log("please enter a usename");
        return
    }
    return `${username} just lgoin hua hai!!!!`
}
console.log(loginUser())