//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"
//
// Created by Larry Nickerson on 9/12/15.
// Copyright (c) 2015 ___FULLUSERNAME___. All rights reserved.
//

import Foundation


print("hi there")
//Runs automatically. Just start typing.
//See "About" for shortcuts
// 1
class beer {
    static func isAvailable() -> Bool {
        return false
    }
}

enum DrinkError: ErrorType {
    case NoBeerRemainingError
}

// 2
func drinkWithError() throws {
    if beer.isAvailable() {
        // party!
        print("party!")
    } else {
        // 3
        print("throwing an error")
        throw DrinkError.NoBeerRemainingError
    }
}

func tryToDrink() {
    // 4
    do {
        try drinkWithError()
    } catch {
        print("Could not drink beer! :[")
        return
    }
}

tryToDrink()