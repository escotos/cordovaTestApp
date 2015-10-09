/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
initialize: function() {
    this.bindEvents();
},
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
bindEvents: function() {
    // document.addEventListener('deviceready', this.onDeviceReady, false);
    //document.getElementById("form_submit").addEventListener('click', this.sendRequest, false);
    document.getElementById("form_submit").addEventListener('click', this.testLogger, false);
},
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
sendRequest: function() {
    var success = function(response) {
        console.log("javascript-MFPRequest From index.js = Success: " + JSON.stringify(response));
    };
    var failure = function(response) {
        console.error("javascript-MFPRequest From index.js = Failure: " + JSON.stringify(response));
    };

    // TRY THE CLIENT
    BMSClient.initialize("http://jsonplaceholder.typicode.com", "some Guid");

    var route = BMSClient.getBluemixAppRoute(function(route) {
        console.error("javascript-BMSClient From index.js = ROUTE: " + route)
    });
    var guid = BMSClient.getBluemixAppGUID(function(guid) {
        console.error("javascript-BMSClient From index.js = GUID: " + guid)
    });
    
    // TRY THE REQUEST
    var method = document.getElementById("form_method");
    var myrequest = new MFPRequest(document.getElementById("form_url").value, method.options[method.selectedIndex].value);
    
    myrequest.setQueryParameters({
                                 parm1: "value1",
                                 parm2: "value2"
                                 });

    myrequest.setHeaders({"Accept" : "text/html", "Larry-Header" : "larry header value"});

    //GET
    myrequest.send(success, failure);



    //POST1
    var url = "http://jsonplaceholder.typicode.com/posts";
    var request = new MFPRequest(url, MFPRequest.POST, 90000);
    request.setHeaders({"Content-Type":"text/html","Larry-POST-Header":"LARRY POSTED TEXT"});
    request.send("sending some txt", success, failure);
  
    //POST2 with content-type set for json
    url = "http://jsonplaceholder.typicode.com/posts";
    request = new MFPRequest(url, MFPRequest.POST);
    request.setHeaders({"Content-Type":"application/json", "Larry-POST-Header":"POST JSON WITH CONTENT TYPE SET TO JSON"});
    request.send({
        title: 'foo',
        body: 'bar',
        userId: 1
    }, success, failure);

    //POST3  content-type not set
    url = "http://jsonplaceholder.typicode.com/posts";
    request = new MFPRequest(url, MFPRequest.POST);
    request.setHeaders({"Larry-POST-Header":"POST JSON WITHOUT CONTENT TYPE"});
    request.send({
                 title: 'foo',
                 body: 'bar',
                 userId: 1
                 }, success, failure);
    
    //PUT
    url = "http://jsonplaceholder.typicode.com/posts/1";
    request = new MFPRequest(url, MFPRequest.PUT, 50000);
    request.setHeaders({"Content-Type":"application/json","Larry-PUT-Header":"LARRY PUT JSON"});

    request.send({
        title: 'Larry',
        body: 'Nickerson',
        userId: 1
    }, success, failure);

    // GET
    url = "http://jsonplaceholder.typicode.com/posts";
    request = new MFPRequest(url, MFPRequest.GET, 30000);
    request.setHeaders({"Accept":"application/json","Larry-Header":"LARRY GET"});

    request.send( success, failure);

    alert("Request Sent");
    

},

testLogger: function(){
    //BEGIN LEN DEBUG
    var success = function(response) {
        console.log("********** javascript-MFPLogger From index.js = Success: " + JSON.stringify(response));
    };
    var failure = function(response) {
        console.error("********** javascript-MFPLogger From index.js = Failure: " + JSON.stringify(response));
    };

    MFPLogger.setCapture(true);
    var isCaptureSet = MFPLogger.getCapture();

    var debugLogger = MFPLogger.getInstance("debugLogger");
    var infoLogger  = MFPLogger.getInstance("infoLogger");
    var warnLogger  = MFPLogger.getInstance("warnLogger");
    var errorLogger = MFPLogger.getInstance("errorLogger");
    var fatalLogger = MFPLogger.getInstance("fatalLogger");
    
    var filter = {
        "debugLogger": "DEBUG",
        "infoLogger":  "INFO",
        "warnLogger":  "WARN",
        "errorLogger": "ERROR",
        "fatalLogger": "FATAL"
    };

    MFPLogger.setFilters(filter);
    var filtersActual = MFPLogger.getFilters(success);

    MFPLogger.setMaxStoreSize(8192);
    var maxStoreSize = MFPLogger.getMaxStoreSize();

    MFPLogger.setLevel("WARN");
    var actualLogLevel = MFPLogger.getLevel(success);

    // NOTE: send() will reset is isUncaughtExceptionDetected to false
    var isExceptionDetected = MFPLogger.isUncaughtExceptionDetected(success);

    debugLogger.debug("debug debug debug");
    infoLogger.info("info info info");
    warnLogger.warn("warn warn warn");
    errorLogger.error("error error error");
    fatalLogger.fatal("fatal fatal fatal");
    
    MFPLogger.send( success, failure );
    //END LEN DEBUG
},

onDeviceReady: function() {
    app.receivedEvent('deviceready');
},
    // Update DOM on a Received Event
receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
    
    console.log('Received Event: ' + id);
}
};

app.initialize();

