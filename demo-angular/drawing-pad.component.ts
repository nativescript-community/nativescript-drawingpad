import { Component, ElementRef, ViewChild } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';

registerElement(
  'DrawingPad',
  () => require('nativescript-drawingpad').DrawingPad
);

@Component({
  selector: 'drawing-pad-example',
  template: `
    <ScrollView>
      <StackLayout>
        <DrawingPad
          #DrawingPad
          height="400"
          id="drawingPad"
          penColor="#ff4081"
          penWidth="3"
        >
        </DrawingPad>

        <StackLayout orientation="horizontal">
          <button text="Get Drawing" (tap)="getMyDrawing()"></button>
          <button text="Clear Drawing" (tap)="clearMyDrawing()"></button>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  `
})
export class DrawingPadExample {
  @ViewChild('DrawingPad') DrawingPad: ElementRef;

  getMyDrawing(args) {
    // get reference to the drawing pad
    let pad = this.DrawingPad.nativeElement;

    // then get the drawing (Bitmap on Android) of the drawingpad
    let drawingImage;
    pad.getDrawing().then(
      function(data) {
        console.log(data);
        drawingImage = data;
      },
      function(err) {
        console.log(err);
      }
    );
  }

  clearMyDrawing(args) {
    var pad = this.DrawingPad.nativeElement;
    pad.clearDrawing();
  }
}
