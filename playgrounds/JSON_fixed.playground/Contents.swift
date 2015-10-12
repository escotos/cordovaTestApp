//: Playground - noun: a place where people can play

import UIKit
import Foundation

var str = "Hello, playground"



let aString = "http://jsonplaceholder.typicode.com/users"

let url = NSURL(string: aString)
var receivedData : NSData;
//receivedData = NSData(contentsOfURL: url!)!

//    let jsonString = "{\"url\":\"www.google.com\", \"method\":\"GET\", \"headers\": {\"Cache-Control\":[\"max-age=30\",\"must-validate\"]}, \"timeout\":\"60000\", \"queryParameters\": {\"QueryParam1\":\"QueryValue1\"}, \"body\":\"the body value\"}"


    let jsonString = "{\"url\":\"www.google.com\", \"method\":\"GET\", \"headers\": {\"Cache-Control\":[\"max-age=30\",\"must-validate\"]}, \"timeout\":\"60000\", \"queryParameters\": {\"QueryParam1\":\"QueryValue1\"}, \"body\": {\"some\":\"thing\"}  }"

    receivedData = jsonString.dataUsingEncoding(NSUTF8StringEncoding)!

    print(receivedData)

//var error:NSError? = nil

do {

    
    
    let jsonObject: AnyObject = try NSJSONSerialization.JSONObjectWithData(receivedData, options: NSJSONReadingOptions.MutableContainers)
    
    if let requestDict = jsonObject as? NSDictionary {
        
        let url     = requestDict.objectForKey("url") as! String
        let timeout = requestDict.objectForKey("timeout") as? Int
        let method  = requestDict.objectForKey("method") as? String
        
        if let body  = requestDict.objectForKey("body") as? NSDictionary{
            
            print(body)
        }
        
        // get the headers
        let requestHeaderDict = requestDict.objectForKey("headers") as! Dictionary<String,[String]>
        let requestHeaderNamesArray = Array(requestHeaderDict.keys)
        
        var headerString: String = ""
        for name in requestHeaderNamesArray {
            for header in requestHeaderDict[ name ]!
            {
                headerString.stringByAppendingFormat(" %s" arguments: header)
                headerString += " "
                headerString += header
            }
        }
 
        //DEBUG OUTPUTS
        print (headerString)
        print (requestHeaderDict)
        print(requestDict)
    
    } else {
        print("not a dictionary")
        if let theArray = jsonObject as? NSArray{
            print(theArray)
        }
    }
//else {
//    print("Could not parse JSON: \(error!)")
//}
   try NSJSONSerialization.dataWithJSONObject( jsonObject ,options: NSJSONWritingOptions.PrettyPrinted )
}
catch{
    print("oh no man!")
}


