import { PropertyChangeData } from "ui/core/dependency-observable";
import { PropertyMetadata } from "ui/core/proxy";
import { ContentView } from "ui/content-view";
import { Color } from "color";
import common = require("./drawingpad-common");

declare var SignatureView: any, CGRectMake: any;

export class DrawingPad extends ContentView {
  private _ios: any = SignatureView;
  private _penColor: string;
  private _penWidth: number;

  constructor() {
    super();
    // console.log('--------- DrawingPad ---------');
    this._ios = SignatureView.alloc().initWithFrame(CGRectMake(0, 0, 100, 100));
    this._ios.clipsToBounds = true;
  }

  get ios(): any {
    return this._ios;
  }

  get _nativeView(): any {
    return this._ios;
  }

  set penColor(value: string) {
    if (this._ios && value) {
      // console.log(`set penColor: ${value}`);
      this._ios.setLineColor(new Color(value).ios);
    } else {
      this._penColor = value;
    }
  }

  set penWidth(value: any) {
    if (this._ios) {
      if (value && typeof value !== 'undefined' && value !== NaN && value !== 'NaN') {
        // console.log(`set penWidth: ${value}`);
        this._ios.setLineWidth(Math.floor(parseInt(value)));
      }
    } else {
      this._penWidth = value;
    }
  }

  public onLoaded() {

    // console.log(`onLoaded ${this.width}, ${this.height}`);
    if (this.width) {
      this._ios.frame.size.width = this.width;
    }
    if (this.height) {
      this._ios.frame.size.height = this.height;
    }

    try {
      if (this._penColor) {
        this.penColor = this._penColor;
      }

      if (this._penWidth) {
        this.penWidth = this._penWidth;
      }

    } catch (ex) {
      console.log(ex);
    }

  }

  public getDrawing(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        let isSigned = this._ios.isSigned();
        if (isSigned === true) {
          let data = this._ios.signatureImage();
          resolve(data);
        } else {
          reject("DrawingPad is empty.");
        }
      } catch (err) {
        reject(err);
      }
    })
  }

  public clearDrawing(): any {
    try {
      if (this.backgroundColor) {
        let color = this.backgroundColor;
        if (color.constructor == Color) {
          color = color.ios;
        } else if (color.constructor == String) {
          color = new Color(<any>color).ios;
        } 
        this._ios.clearWithColor(color);
      } else {
        this._ios.clear();
      }
    } catch (err) {
      console.log("Error clearing the DrawingPad: " + err);
    }
  }

}