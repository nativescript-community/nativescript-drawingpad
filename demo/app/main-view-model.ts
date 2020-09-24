import { DrawingPad } from '@nativescript-community/drawingpad';
import { ImageSource, Observable, Page, Slider } from '@nativescript/core';
import { ColorPicker } from 'nativescript-color-picker';

export class HelloWorldModel extends Observable {
  private _myDrawingPad: DrawingPad;
  private _widthSlider: Slider;
  private _penInput: any;
  private _colorPicker: ColorPicker;

  public penWidth = 5;
  public penColor = '#3489db';

  constructor(mainPage: Page) {
    super();
    this._myDrawingPad = mainPage.getViewById('drawingPad') as DrawingPad;
    this._colorPicker = new ColorPicker();
  }

  public getMyDrawing() {
    this._myDrawingPad.getDrawing().then(res => {
      console.log(res);
      // convert native image data (bitmap on android) to imageSource for NS
      const image = ImageSource.fromDataSync(res);
      console.log('trying to set image');
      this.set('drawingImage', image);
    });
  }

  public getMyDrawingSvg() {
    this._myDrawingPad.getDrawingSvg().then(res => {
      console.log(res);
    });
  }

  public clearMyDrawing() {
    this._myDrawingPad.clearDrawing();
    this.set('drawingImage', null);
  }

  public changePenColor() {
    this.set('penColor', '#ff4801');
  }

  public openColorPicker() {
    this._colorPicker
      .show('#3489db', 'HEX')
      .then(result => {
        this.set('penColor', result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
