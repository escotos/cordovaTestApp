//: Playground - noun: a place where people can play

import UIKit
import Foundation

var str = "Hello, playground"
var searchTerm :String = "Swift"

var endpoint = NSURL(string: "https://api.github.com/search/repositories?q=\(searchTerm)")

var data = NSData(contentsOfURL: endpoint!)




  if let json: NSDictionary =  NSJSONSerialization.JSONObjectWithData(data!, options: NSJSONReadingOptions.MutableContainers) as? NSDictionary {
        
    if let items = json["items"] as? NSArray {
        for item in items {
            // construct your model objects here
        }
    }


