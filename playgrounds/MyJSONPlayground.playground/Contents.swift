//: Playground - noun: a place where people can play

import UIKit
import Foundation

var str = "Hello, playground"



let aString = "http://jsonplaceholder.typicode.com/users"

let url = NSURL(string: aString)
var receivedData : NSData;
//receivedData = NSData(contentsOfURL: url!)!

//    let jsonString = "{\"url\":\"www.google.com\", \"method\":\"GET\", \"headers\": {\"Cache-Control\":[\"max-age=30\",\"must-validate\"]}, \"timeout\":\"60000\", \"queryParameters\": {\"QueryParam1\":\"QueryValue1\"}, \"body\":\"the body value\"}"


//let jsonString = "{\"url\":\"www.google.com\", \"method\":\"GET\", \"headers\": {\"Cache-Control\":[\"max-age=30\",\"must-validate\"],\"Cache-Control2\":[\"max-age=30\",\"must-validate\"]}, \"timeout\":\"60000\", \"queryParameters\": {\"QueryParam1\":\"QueryValue1\"}, \"body\": {\"some\":\"thing\"}  }"

let jsonString = "{\"url\":\"www.google.com\", \"method\":\"GET\", \"headers\": {\"Cache-Control\":[\"max-age=30\",\"must-validate\"],\"Cache-Control2\":[\"max-age=30\",\"must-validate\"]}, \"timeout\":\"60000\", \"queryParameters\": {\"QueryParam1\":\"QueryValue1\"}, \"body\": \"This is the body\"  }"

receivedData = jsonString.dataUsingEncoding(NSUTF8StringEncoding)!

print(receivedData)

//var error:NSError? = nil

do {
    
    let jsonRequestObject: AnyObject = try NSJSONSerialization.JSONObjectWithData(receivedData, options: NSJSONReadingOptions.MutableContainers)
    

    if let requestDict = jsonRequestObject as? NSDictionary {
        
        let url     = requestDict.objectForKey("url") as! String
        let timeout = requestDict.objectForKey("timeout") as? Int
        let method  = requestDict.objectForKey("method") as? String
 
        // process the body
        if let body  = requestDict.objectForKey("body") as? NSDictionary {
            print(body)
        }
        else{
            let body = requestDict.objectForKey("body") as? String
        }
        
        // get the headers
        let requestHeaderDict = requestDict.objectForKey("headers") as! Dictionary<String,[String]>
        let requestHeaderNamesArray = Array(requestHeaderDict.keys)
        var flattenedHeaders : Dictionary<String, String> = [:]
        
        for name in requestHeaderNamesArray {
            var headerString: String = ""
            
            // combine mutli-valued headers into a string
            for header in requestHeaderDict[ name ]!
            {
                headerString += "\(header) "
            }
            
            // trim the trailing space
            headerString = headerString.stringByTrimmingCharactersInSet(NSCharacterSet.whitespaceCharacterSet())
            
            // add the flattened headers to a dictionary
            flattenedHeaders[name] = headerString
        }
        
        
        //HEADER PROCESSING DEBUG OUTPUTS
        print(requestDict)
        print (requestHeaderDict)
        print(flattenedHeaders)
        
        // get the query parameters
        let requestQueryParamsDict = requestDict.objectForKey("queryParameters") as! Dictionary<String,String>
        
        //LEN DEBUG just showing i can cast from Generic to NSDictionary
        //let requestQueryParamsNSDict = requestQueryParamsDict as NSDictionary
        
        
    }

    //LEN DEBUG  == show how to return and object as json
    if ( NSJSONSerialization.isValidJSONObject(jsonRequestObject)){
        let myJsonObject = try NSJSONSerialization.dataWithJSONObject( jsonRequestObject ,options: NSJSONWritingOptions.PrettyPrinted )
        
        
        
    }
    
    //BEGIN LEN DEBUG TEST CONVERTING FROM STRING TO NSDATA and TO AN JSON OBJECT
    //http://ios-blog.co.uk/tutorials/quick-tips/quick-tip-converting-nsstring-to-nsdata/
    let str:NSString = "{\"AAA\":\"AAA\",\"BBB\":\"BBB\"}"
    
    if let data: NSData = str.dataUsingEncoding(NSUTF8StringEncoding){
        print(data)
        let myJsonAnyObject = try NSJSONSerialization.JSONObjectWithData(data, options: NSJSONReadingOptions.MutableContainers)
        print(myJsonAnyObject)
        
        //TEST CONVERTING NSDATA TO A STRING
        let resstr =  NSString(data: data, encoding: NSUTF8StringEncoding)
    }

    //EXAMPLE OF SWIFT VERSION OF SEND WITH COMPLETION HANDLER
//    var request: IMFResourceRequest = IMFResourceRequest(path: "http://carloshelloworldmobile.mybluemix.net")
//    request.setHTTPMethod("GET")
//    request.sendWithCompletionHandler { (response: IMFResponse!, error: NSError!) -> Void in
//        if (error != nil) {
//            // process the error
//            print("Error  in ViewController\(error.localizedDescription)")
//        } else {
//            // process success
//            print("Response in ViewController \(response)")
//            print("Response text in ViewController \(response.responseText)")
//            
//        }
//    }
    
    
}
catch{
    print("oh no man!")
}


