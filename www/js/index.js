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
    document.getElementById("form_submit").addEventListener('click', this.sendRequest, false);
},
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
sendRequest: function() {
    var success = function(response) {
        console.log("javascript-MFPResourceRequest From index.js = Success: " + JSON.stringify(response.getAllHeaders()));
    };
    var failure = function(response) {
        console.error("javascript-MFPResourceRequest From index.js = Failure: " + JSON.stringify(response.getAllHeaders()));
    };
    
    
    
    // TRY THE REQUEST
    var method = document.getElementById("form_method")
    var myrequest = new MFPResourceRequest(document.getElementById("form_url").value, method.options[method.selectedIndex].value);
    
    myrequest.setQueryParameters({
                                 parm1: "value1",
                                 parm2: "value2"
                                 });
    myrequest.setHeader("Accept", "text/html");
    myrequest.setHeader("Larry Header", "larry header value");
    
    //myrequest.sendFormParameters({formParm1:"formParmValue1",formParm2:"formParmValue2"},success,failure);
    
    //GET
    myrequest.send(success, failure);
    
    //POST1
    var url1 = "http://jsonplaceholder.typicode.com/posts"
    var requestPost1 = new MFPRequest(url1, MFPResourceRequest.POST, 30000);
    requestPost1.send("sending some txt", success, failure);
    
    //POST2
    var url2 = "http://jsonplaceholder.typicode.com/posts"
    var requestPost2 = new MFPRequest(url, MFPResourceRequest.POST, 30000);
    requestPost2.addHeader("Content-Type","application/json");
    requestPost2.send({
        title: 'foo',
        body: 'bar',
        userId: 1
    }, success, failure);
    
    alert("Request Sent");
    
    // TRY THE CLIENT
    MFPClient.initialize("http:www.google.com", "some Guid");
    var version = MFPClient.version();
    var route = MFPClient.getBluemixAppRoute(function(route) {
                                             console.error("javascript-MFPClient From index.js = ROUTE: " + route)
                                             });
    var guid = MFPClient.getBluemixAppGUID(function(guid) {
                                           console.error("javascript-MFPClient From index.js = GUID: " + guid)
                                           });
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

