
//Closures with known types:
//When the type of the closure's arguments are known, you can do as follows:

//note multFunction is a closure that takes and return and int
func applyMutliplication(value: Int, multFunction: Int -> Int) -> Int {
    // call the closure and pass the value param to it
    return multFunction(value)
}

// call the function that takes a closure and pass a closure to it
applyMutliplication(2, multFunction: {myVal in
    myVal * 5
})
