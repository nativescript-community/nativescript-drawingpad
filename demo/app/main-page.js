var observable = require("data/observable").Observable;
var app = require("application");
var color = require("color");

var data = new observable({});

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = data;
}
exports.pageLoaded = pageLoaded;


function getDrawing(args) {
    console.log(args.object);
}
exports.getDrawing = getDrawing;