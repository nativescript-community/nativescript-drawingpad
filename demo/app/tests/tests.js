describe('imagefilters class', function() {
  it('can be instantiated', function() {
    var testDrawingPad;
    var DrawingPad = require('nativescript-drawingpad').DrawingPad;
    if (DrawingPad) {
      testDrawingPad = new DrawingPad();
      console.log('DrawingPad instance: ' + testDrawingPad);
    }

    expect(function() {
      return new DrawingPad();
    }).not.toThrow();

    expect(new DrawingPad()).toBeDefined();
  });
});
