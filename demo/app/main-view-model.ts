import { Observable, EventData, PropertyChangeData } from 'data/observable';
import { Page } from 'ui/page';
import { Color } from 'color';
import { Switch } from 'ui/switch';
import { Slider } from "ui/slider";
import { ColorPicker } from 'nativescript-color-picker';
import { DrawingPad } from 'nativescript-drawingpad';

export class HelloWorldModel extends Observable {
  private _myDrawingPad: DrawingPad;
  private _widthSlider: Slider;
  private _colorPicker: ColorPicker;

  public penWidth: string;
  public penColor: string;

  constructor(mainPage: Page) {
    super();
    this._myDrawingPad = <DrawingPad>mainPage.getViewById('drawingPad');
    this._widthSlider = <Slider>mainPage.getViewById('widthSlider');
    this._widthSlider.on('propertyChange', (args: PropertyChangeData) => {
      this.set('penWidth', args.value);
    });

    this.penWidth = '5';
    this.penColor = '#3489db';
    this._colorPicker = new ColorPicker();
  }


  public getMyDrawing() {
    this._myDrawingPad.getDrawing().then((res) => {
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
    this._colorPicker.show('#3489db', 'RGB').then((result) => {
      console.log('color int: ' + result);
      this.set('penColor', new Color(result).android);
    }).catch((err) => {
      console.log(err);
    })
  }

}