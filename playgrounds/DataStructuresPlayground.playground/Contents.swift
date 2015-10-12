import Foundation


//arrays
var shoppingList = ["Milk", "Juice","Eggs", "Bread", "Spaghetti"]

shoppingList.append("Cereal")



shoppingList.removeAtIndex(2)

for item in shoppingList {
    print(item)
}


//dictionaries
var students = [3.22:"Mike", 4.0:"Mary", 3.11:"Shawn", 2.55:"Christopher",3.79:"Jennifer"]


students[3.199] = "Bill"

students[3.22] = nil

for (gpa, student) in students{
print("\(student) has a gpa of \(gpa)")
}







//var someStudent = students[4.0]
//
//NSJSONSerialization.isValidJSONObject(students)

//// better way to make a dictionary
//var betterStudents: NSDictionary = ["Mike":3.22, "Mary":4.0, "Shawn":3.11, "Christopher":2.55,"Jennifer":3.79]
//
//if NSJSONSerialization.isValidJSONObject(betterStudents){
//    do{
//        var theString = try NSJSONSerialization.dataWithJSONObject(betterStudents, options: NSJSONWritingOptions.PrettyPrinted)
//       NSJSONSerialization.JSONObjectWithData(theString, options: nil)
//        print(theString)
//    }
//    catch {
//    }
//}







