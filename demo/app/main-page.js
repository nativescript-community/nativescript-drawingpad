var observable = require("data/observable").Observable;
var app = require("application");
var platformModule = require("platform");
var color = require("color");
var frame = require("ui/frame");

var data = new observable({});

function pageLoaded(args) {
    var page = args.object; 
    page.bindingContext = data;
    // Change statusbar color on Lollipop
    if (app.android && platformModule.device.sdkVersion >= "21") {
        var window = app.android.startActivity.getWindow(); 
        window.setStatusBarColor(new color.Color("#0288D1").android);
    }
}
exports.pageLoaded = pageLoaded; 



function getMyDrawing(args) {
    var pad = frame.topmost().currentPage.getViewById("drawingPad");
    pad.getDrawing().then(function (data) {
        console.log(data);
    }, function (err) {
        console.log(err);
    });
}
exports.getMyDrawing = getMyDrawing;

function clearMyDrawing(args) {
    var pad = frame.topmost().currentPage.getViewById("drawingPad");
    pad.clearDrawing();
}
exports.clearMyDrawing = clearMyDrawing;