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
    headers: 1,
    parameters: 1,

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        document.getElementById("button_add_header").addEventListener('click', this.AddHeaderRow, false);
        document.getElementById("button_add_parameter").addEventListener('click', this.AddParameterRow, false);
        document.getElementById("request_submit").addEventListener('click', this.sendRequest, false);
    },
    sendRequest: function() {
        BMSClient.initialize("http://escotos-core-test.mybluemix.net", "someGUID");
        
        console.log("JS.sendRequest() - BMSClient initialized.");

        var success = function(response) {
            console.log("JS.sendRequest() - Success");
            console.log("JS.sendRequest() - response as String: " + JSON.stringify(response));
            alert("Success");
            alert("Response\n: " + JSON.stringify(response, null, 2));
        };

        var failure = function(response) {
            console.error("JS.sendRequest() = Failure");
            console.log("JS.sendRequest() - response as String: " + JSON.stringify(response));
            alert("Failure");
            alert("Response\n: " + JSON.stringify(response, null, 2));
        };

        //Retrieve Form Data
        var method = document.getElementById("form_method");
        method = method.options[method.selectedIndex].value;
        var url = document.getElementById("form_url").value;
        var timeout = document.getElementById("form_timeout").value;
        var body = document.getElementById("form_body").value;

        //Create MFPRequest using native Bluemix SDKs
        var request = new MFPRequest(url, method, timeout);

        var headers = app.gatherHeaders();
        request.setHeaders(headers);

        var queryParams = app.gatherParameters();
        request.setQueryParameters(queryParams);

        if (body) {
            request.send(body, success, failure);
        } else {
            request.send(success, failure);
        }

        alert("Request Sent");
    },
    // Add a row before the Add Header row
    AddHeaderRow: function() {
        var target = document.getElementById("row_add_header");

        //Create and insert the row - tr
        var newRow = document.createElement('tr');
        target.parentNode.insertBefore(newRow, target);

        app.headers++;

        //Create and insert our cells
        newRow.insertCell(0);

        var hName = newRow.insertCell(1);
        hName.innerHTML = "<input id=\"form_header"+app.headers+"\" type=\"text\" name=\"header"+app.headers+"\" value=\"h name\" style=\"width: 100%\" />";

        var hValue = newRow.insertCell(2);
        hValue.innerHTML = "<input id=\"form_header"+app.headers+"v\" type=\"text\" name=\"header"+app.headers+"v\" value=\"h value\" style=\"width: 100px\" />";

        return newRow;
    },
    // Add a row before the Add Parameter row
    AddParameterRow: function() {
        var target = document.getElementById("row_add_parameter");

        //Create and insert the row - tr
        var newRow = document.createElement('tr');
        target.parentNode.insertBefore(newRow, target);

        app.parameters++;

        //Create and insert our cells
        newRow.insertCell(0);

        var hName = newRow.insertCell(1);
        hName.innerHTML = "<input id=\"form_param"+app.parameters+"\" type=\"text\" name=\"param"+app.parameters+"\" value=\"p name\" style=\"width: 100%\" />";

        var hValue = newRow.insertCell(2);
        hValue.innerHTML = "<input id=\"form_param"+app.parameters+"v\" type=\"text\" name=\"param"+app.parameters+"v\" value=\"p value\" style=\"width: 100px\" />";

        return newRow;
    },
    gatherHeaders: function() {
        var newheaders = {};
        for(var i = 1; i <= app.headers; i++) {
            var currentHeader = document.getElementById("form_header"+i).value;
            if(currentHeader) {
                var currentHeaderValue = document.getElementById("form_header"+i+"v").value;
                newheaders[currentHeader] = [currentHeaderValue];
            }
        }

        return newheaders;
    },
    gatherParameters: function() {
        var newparameters = {};
        for(var i = 1; i <= app.parameters; i++) {
            var currentParameter = document.getElementById("form_param"+i).value;
            if(currentParameter) {
                var currentParameterValue = document.getElementById("form_param"+i+"v").value;
                newparameters[currentParameter] = currentParameterValue;
            }
        }

        return newparameters;
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
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