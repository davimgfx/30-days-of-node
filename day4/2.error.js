// 1 Object Error
const error = new Error("Something went wrong!")

// console.log(error.stack)
//console.log(error.message)
// throw new Error("New error")

// 2 Custom error

const { CustomError } = require("./2.CustomError")

// throw new CustomError("This is a CustomError object")

// 3 Try/catch
const doSomething = () => {
    const data = "essa é a data"
    return data
}

// try{
//     doSomething()
// } catch(err){
//     console.log(err)
// }

// 4 
const promise = new Promise((resolve, reject) => {
    if(true){
        // If is resolved, go to then
        resolve(doSomething());
    } else {
        // If is reject, go to catch
        reject(doSomething())
    }
})

promise
    .then((val) => {
        console.log(val)
    })
    .catch(error => {
        console.log(error)
        console.log("Error")
})