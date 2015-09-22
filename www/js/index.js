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
        BMSClient.initialize("http://escotos-core-test.mybluemix.net", "someGUID");
        console.log("javascript-MFPRequest index.js - BMSClient initialized.");


        var success = function(response) {
            console.log("javascript-MFPRequest index.js - Success");
            console.log("javascript-MFPRequest index.js - response as String: " + JSON.stringify(response));
        };
        var failure = function(response) {
            console.error("javascript-MFPRequest index.js = Failure");
            console.log("javascript-MFPRequest index.js - response as String: " + JSON.stringify(response));
        };
        var method = document.getElementById("form_method");
        var request = new MFPRequest(document.getElementById("form_url").value, method.options[method.selectedIndex].value);

        var headers = {
            header1: ["val1"],
            header2: ["val2", "val3"]
            }

        request.setHeaders(headers)

        var queryParams = {
            param1: "val1",
            param2: "val2"
        }
        request.setQueryParameters(queryParams)

        request.send(success, failure);
        alert("Request Sent");
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