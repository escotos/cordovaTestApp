//: Playground - noun: a place where people can play

import UIKit
import Foundation

var str = "Hello, playground"


let JSONData = NSData()
do {
    let JSON = try NSJSONSerialization.JSONObjectWithData(JSONData, options:NSJSONReadingOptions(rawValue: 0))
    guard let JSONDictionary :NSDictionary = JSON as? NSDictionary else {
        print("Not a Dictionary")
        
        // put in function
        return
    }
    print("JSONDictionary! \(JSONDictionary)")
}
catch let JSONError as NSError {
    print("\(JSONError)")
}
