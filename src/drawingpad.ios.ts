/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./typings/SignatureView.d.ts" />

import { Color } from 'tns-core-modules/color';
import {
  DrawingPadBase,
  penColorProperty,
  penWidthProperty
} from './drawingpad-common';

export class DrawingPad extends DrawingPadBase {
  public nativeView: SignatureView;
  constructor() {
    super();
    this.nativeView = SignatureView.alloc().initWithFrame(
      CGRectMake(0, 0, 100, 100)
    );
    this.nativeView.clipsToBounds = true;
  }

  get ios(): SignatureView {
    return this.nativeView;
  }

  [penWidthProperty.getDefault](): number {
    return this.nativeView.foregroundLineWidth;
  }
  [penWidthProperty.setNative](value: number) {
    this.nativeView.setLineWidth(Math.floor(value));
  }

  [penColorProperty.getDefault](): UIColor {
    return this.nativeView.foregroundLineColor;
  }
  [penColorProperty.setNative](value: Color | UIColor) {
    const color = value instanceof Color ? value.ios : value;
    this.nativeView.setLineColor(color);
  }

  public onLoaded() {
    if (this.width) {
      this.nativeView.frame.size.width = this.width;
    }
    if (this.height) {
      this.nativeView.frame.size.height = this.height;
    }
    super.onLoaded();
  }

  public getDrawing(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        let isSigned = this.nativeView.isSigned();
        if (isSigned === true) {
          const data = this.nativeView.signatureImage();
          resolve(data);
        } else {
          reject('DrawingPad is empty.');
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  public getDrawingSvg(): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        let isSigned = this.nativeView.isSigned();
        if (isSigned === true) {
          const data = this.nativeView.signatureSvg();
          resolve(data);
        } else {
          reject('DrawingPad is empty.');
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  public clearDrawing(): void {
    try {
      if (this.backgroundColor) {
        let color = this.backgroundColor;
        if (color.constructor == Color) {
          color = (color as any).ios;
        } else if (color.constructor == String) {
          color = new Color(<any>color).ios;
        }
        this.nativeView.clearWithColor(color);
      } else {
        this.nativeView.clear();
      }
    } catch (err) {
      console.log('Error clearing the DrawingPad: ' + err);
    }
  }
}
