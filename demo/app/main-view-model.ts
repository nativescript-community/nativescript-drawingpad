import { Observable, EventData, PropertyChangeData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { Color } from 'tns-core-modules/color';
import { Switch } from 'tns-core-modules/ui/switch';
import { Slider } from 'tns-core-modules/ui/slider';
import { ColorPicker } from 'nativescript-color-picker';
import { DrawingPad } from 'nativescript-drawingpad';

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
    });
  }

  public getMyDrawingSvg() {
    this._myDrawingPad.getDrawingSvg().then(res => {
      console.log(res);
    });
  }

  public clearMyDrawing() {
    this._myDrawingPad.clearDrawing();
  }

  public changePenColor() {
    this.set('penColor', '#ff4801');
  }

  public openColorPicker() {
    this._colorPicker
      .show('#3489db', 'HEX')
      .then(result => {
        console.log('color int: ' + result);
        this.set('penColor', result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
