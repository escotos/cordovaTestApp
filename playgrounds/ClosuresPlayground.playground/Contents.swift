func add(number1:Int, number2:Int)->Int{
    return number1 + number2
}

let myAddFunction = add

////print(myAddFunction(1,number2:2))

let myClosureFunc = {(a:Int,b:Int) -> Int in return a + b }

////print("The output is: \(myClosureFunc(4,5))")


////print("The output is: \({(a:Int,b:Int) -> Int in return a + b })")


////print("The output is: \(myClosureFunc)")

let theOutput = myClosureFunc(1,4)

////print("The output is: \(theOutput)")

let anotherClosure =
// a swift closure starts and ends with brackets
// a swift closure has
{ () -> Void in
    print("\n\nin anotherClosure")
    print("YO!!!")
    print(" Bro!!")
    print(myAddFunction(20,number2:30))
}

// call the closure
//anotherClosure()

// lets use the closure as a callback

func callbackInvoker(callback:(Int,Int) -> Int){
    print("calling the Callback: " + " \(callback(100, 200))" )
}

// lets call the callback which is a closure
//callbackInvoker(add)


// Define a functin that takes a callback which has no args and returns void
func anotherCallbackInvoker(callback:()->Void){
    callback()// calling the callback works
    
    //invoking the callback inside string interpolation operator doesn't work!!!
    //print ("\n\nCalling the other closure: \(callback())")
}

anotherCallbackInvoker(anotherClosure)

// define the cloure and pass it to the invoker
/*
anotherCallbackInvoker({ () -> Void in
print("\n\nin anotherClosure")
print("YO!!!")
print(" Bro!!")
print(myAddFunction(20,number2:30))
} )
*/







