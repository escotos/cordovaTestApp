// returnin a function and internal nested functions example



//You can use a function type as the return type of another function. You do this by writing a complete function type immediately after the return arrow (->) of the returning function.

var str = "Hello, playground"

func chooseStepFunction(backwards: Bool) -> (Int) -> Int {
    func stepForward(input: Int) -> Int { print( "\(input + 1)" + "...\n");return input + 1 }
    func stepBackward(input: Int) -> Int { print( "\(input - 1)" + "...\n");return input - 1 }
    return backwards ? stepBackward : stepForward
}
var currentValue = -4
let moveNearerToZero = chooseStepFunction(currentValue > 0)
// moveNearerToZero now refers to the nested stepForward() function

while currentValue != 0 {
    print(":\(currentValue)...\n ")
    currentValue = moveNearerToZero(currentValue)
}


print("zero!")
// -4...
// -3...
// -2...
// -1...
// zero!
