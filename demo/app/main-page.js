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
    if (platformModule.device.sdkVersion >= "21") {
        var window = app.android.startActivity.getWindow(); 
        window.setStatusBarColor(new color.Color("#0288D1").android);
    }
}
exports.pageLoaded = pageLoaded;

function padLoaded(args) {
    console.log(args.object);
    console.log('native pad: ' + args.object.android);
}
exports.padLoaded = padLoaded;

function getDrawing(args) {
    var pad = frame.topmost().currentPage.getViewById("drawingPad");
    var pic = pad.drawing;
    console.log(pic);
}
exports.getDrawing = getDrawing;

function clearDrawing(args) {
    var pad = frame.topmost().currentPage.getViewById("drawingPad");
    pad.clearDrawing();
}
exports.clearDrawing = clearDrawing;