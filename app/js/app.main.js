/**
 * Created by Nicklas.Vind on 15-05-2015.
 */
var NFV = NFV || {};
NFV.MyApp = NFV.MyApp || {};

(function (app) {
    app.module = (function () {
        var publicApi = {
            DefaultName: "Bill Nye"
        };
        publicApi.LogName = function (name) {
            var nameToLog = name || this.DefaultName;
            app.log(nameToLog);
        };
        return publicApi;
    })();
})(NFV.MyApp);

(function (app) {
    app.logging = function () {
        var publicApi = {
            args : arguments
        };
        var _args = arguments;
        var _logOne = function (message) {
            console.log(message);
        };
        var _logMore = function (/*Takes infinite arguments*/) {
            if(arguments.length !== 0){
                for(var i = 0; i < arguments.length; i +=1){
                    _logOne(arguments[i]);
                }
            }
        };
        var _logInitParameters = function () {
            if(_args.length !== 0){
                for(var i = 0; i < _args.length; i +=1){
                    _logOne(_args[i]);
                }
            }else{
                _logOne("No Initial args supplied")
            }
        };
        var _logInitParameters2 = function () {
            if(this.args.length !== 0){
                for(var i = 0; i < this.args.length; i +=1){
                    _logOne(this.args[i]);
                }
            }else{
                _logOne("No Initial args supplied")
            }
        };
        publicApi.logOne = _logOne;
        publicApi.logMore = _logMore;
        publicApi.logInitParams = _logInitParameters;
        publicApi.logInitParams2 = _logInitParameters2;

        return publicApi;

    }

})(NFV.MyApp);

(function (app) {
    app.SmallMessagingSystem = function (contentId, textFieldId, submitBtnId) {
        var publicApi;
        var button, contentField, textMessageField;
        var options = {
            contentId: contentId || "content",
            textFieldId: textFieldId || "TextField",
            buttonId: submitBtnId || "ButtonId"
        };

        var _submitText = function() {
            console.log("Button clicked");
            if(textMessageField.value !== ""){
            contentField.innerHTML += "<br> "+ textMessageField.value;
            textMessageField.value = "";
            }else{
                alert("please fill out the message inputfield");
            }
        };

        var _init = function () {
            button = document.getElementById(options.buttonId);
            contentField = document.getElementById(options.contentId);
            textMessageField = document.getElementById(options.textFieldId);
            button.addEventListener("click",_submitText,true);
        };

        publicApi = {
            init: _init
        };
        return publicApi;
    }
}(NFV.MyApp));

var app = NFV.MyApp;
