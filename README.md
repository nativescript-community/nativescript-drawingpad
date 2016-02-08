# NativeScript-SignaturePad :pencil:
NativeScript plugin to provide a way to capture signatures (or any drawing) from the device.

#### Platform controls used: 
Android | iOS
---------- | -----------
[gcacace/android-signaturepad](https://github.com/gcacace/android-signaturepad) |  [SignatureView](https://cocoapods.org/pods/SignatureView)

## Installation
From your command prompt/termial go to your app's root folder and execute:
`npm install nativescript-signaturepad`

## Usage
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:SignaturePad="nativescript-signaturepad">
     <StackLayout>
         <SignaturePad:SignaturePad id="drawingPad" penColor="#3489db" penWidth="5" />        
     </StackLayout>
</Page>
```

```JS
var frame = require("ui/frame");
function getDrawing(args) {
    // get reference to the drawing pad
    var pad = frame.topmost().currentPage.getViewById("drawingPad");
    // then access the 'drawing' property of the signaturepad;
    var drawingImage = pad.drawing;
}
exports.getDrawing = getDrawing;
```

## Attributes
**penColor - (color string)** - *optional*

Attribute to specify the pen (stroke) color to use.

**penWidth - (int)** - *optional*

Attribute to specify the pen (stroke) width to use.