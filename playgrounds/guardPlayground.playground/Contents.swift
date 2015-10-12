

import Foundation

func guardExample(){
    
    //let userName : String? = "Papa"
    let userName : String? = nil
    
    guard let unwrappedName = userName else {
        return
    }
    
    print("Your username is \(unwrappedName)")
}
guardExample()
