//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"


// Defining a function

func jediGreet(name: String, ability: String) -> (farewell: String, mayTheForceBeWithYou: String) {
    // returns a tuple
    return ("Hello, \(name).", " May the \(ability) be with you.")
}

jediGreet("Larry",ability: "Dance")


// Calling a function:

let retValue = jediGreet("old friend", ability: "Force")
print(retValue)
print(retValue.farewell)
print(retValue.mayTheForceBeWithYou)





//Function types
//Every function has its own function type, made up of the parameter types and the return type of the function itself.
//For example the following function:

func sum(x: Int, y: Int) -> (Int) { return x + y }  //note: this returns a single element tuple
// has a function type of:
// (Int, Int) -> (Int)




//
//Passing and returning functions
//The following function is returning another function as its result which can be later assigned to a variable and called.
func jediTrainer () -> ((String, Int) -> String) {
    
    func train(name: String, times: Int) -> (String) {
        return "\(name) has been trained in the Force \(times) times"
    }
    return train
}
let train = jediTrainer()
train("Obi Wan", 3)



//Variadic functions
//Variadic functions are functions that have a variable number of arguments (indicated by ... after the argument's type) that can be accessed into their body as an array.

func jediBladeColor (colors: String...) -> () {
    for color in colors {
        print("\(color)")
    }
}

jediBladeColor("red","green")





